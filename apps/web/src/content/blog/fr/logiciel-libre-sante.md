---
title: "Logiciel libre ou propriétaire en santé : ce qui change vraiment"
description: "Ce que la licence d'un logiciel de santé décide réellement, ce qu'elle ne décide pas, et comment vérifier en dix minutes dans quelle catégorie vous êtes."
pubDate: 2026-08-27
translationKey: software-libre-sanidad
tags: [logiciel-libre, open-source, licences, rgpd, contrats]
---

La licence ne décide pas si un logiciel convient à votre cabinet. Elle décide trois choses précises : qui pourra le maintenir si l'éditeur disparaît, si vous pouvez l'installer sur votre propre serveur, et à quelles conditions vous aurez encore le droit de l'utiliser dans dix ans.

Tout le reste, le prix, le support, la sécurité réelle et la responsabilité RGPD, dépend de l'éditeur et de la façon dont le système est déployé. Rien de cela n'est écrit dans la licence, et confondre les deux listes est la meilleure façon de mal choisir.

## Il y a trois catégories, pas deux

Le débat habituel oppose « libre » et « propriétaire » et oublie la catégorie où se trouve aujourd'hui une part croissante du marché.

L'Open Source Initiative maintient la définition de référence, en version 1.9. Sa première phrase est celle que l'on oublie : « l'open source ne signifie pas seulement l'accès au code source ». La définition exige aussi que la licence autorise la redistribution, autorise les travaux dérivés et n'interdise à personne « d'utiliser le programme dans un domaine d'activité particulier ».

La Free Software Foundation formule la même idée en quatre libertés : exécuter le programme comme vous le souhaitez, étudier son fonctionnement et le modifier, redistribuer des copies, et diffuser vos versions modifiées. Pour les libertés 1 et 3, précise le texte, « l'accès au code source est une condition nécessaire ».

| | Libre / open source | Code disponible | Propriétaire |
|---|---|---|---|
| Vous lisez le code | ✓ Tout le monde | ✓ Publié | ✗ Non, sauf séquestre |
| Vous pouvez le modifier | ✓ Oui | ✓ Oui | ✗ Non |
| Usage sans restriction | ✓ Aucun domaine exclu | ~ Certains usages exclus | ~ Ce que dit le contrat |
| Vous pouvez le redistribuer | ✓ Oui | ~ Avec les mêmes limites | ✗ Non |
| Conforme à la définition OSI | ✓ Oui | ✗ Non | ✗ Non |
| Licences typiques | GPLv3, AGPL, Apache 2.0, MIT | BSL 1.1, Elastic License | Contrat de l'éditeur |

La colonne du milieu est réelle et elle progresse. La Business Source License 1.1 publie le code et autorise sa modification, mais réserve certains usages, et son propre texte le dit sans détour : « cette licence n'est pas une licence open source ». Elle engage aussi l'œuvre à basculer vers une véritable licence libre à une date fixée.

> **« Le code est public » et « c'est de l'open source » ne sont pas la même affirmation.** Un éditeur peut vous montrer chaque ligne et interdire malgré tout des usages précis. Ce n'est pas trompeur, c'est une autre catégorie, et seule la lecture de la licence permet de savoir laquelle.

## Ce que la licence décide

- **Qui peut maintenir le logiciel quand l'éditeur n'est plus là.** Avec le code et le droit de le modifier, n'importe quel développeur compétent peut corriger le système. Ce n'est ni gratuit ni immédiat, mais c'est possible, et c'est la différence qui compte le jour de l'annonce.
- **Où il s'exécute.** Une licence libre vous permet d'installer sur votre matériel. Un abonnement propriétaire en ligne ne le permet presque jamais, quel que soit le montant payé.
- **Si vous pouvez auditer ce qu'il fait des données.** Lire le code est le seul moyen de vérifier ce qui sort du cabinet et à quelle fréquence, plutôt que de croire une réponse commerciale.
- **Ce qui se passe dans dix ans.** Une licence libre n'expire pas. Un abonnement, si, et il emporte avec lui l'accès au logiciel qui contient vos dossiers cliniques.

## Ce que la licence ne décide pas

C'est là que se logent la plupart des malentendus.

- **Qui répond au titre du RGPD.** L'article 4, point 7, désigne comme responsable du traitement celui qui « détermine les finalités et les moyens du traitement », et l'article 24, paragraphe 1, lui impose de démontrer la conformité. C'est le cabinet, quel que soit le logiciel. Si l'hébergement est confié à un tiers, l'article 28 exige un contrat de sous-traitance, et son point 3.g impose la restitution ou l'effacement des données à la fin de la prestation.
- **Si le logiciel est un dispositif médical.** Le règlement (UE) 2017/745 définit le dispositif médical comme « tout instrument, appareil, équipement, logiciel, implant, réactif, matière ou autre article » destiné par le fabricant à une fin médicale. C'est la destination qui tranche, jamais la licence.
- **S'il est sûr.** Un code public est auditable, pas audité. Ce sont deux choses différentes et seule la seconde protège quelqu'un.
- **Ce qu'il coûte.** Il existe du logiciel libre avec des contrats de support coûteux et du propriétaire bon marché.
- **Si quelqu'un décroche un vendredi à vingt heures.** Cela dépend d'un contrat de support, et les deux catégories en vendent.

![Dossier patient avec les alertes cliniques, le plan de traitement en cours et la frise chronologique filtrable par visites, actes, règlements et échanges](/screenshots/patient-timeline.png)

*Des années de dossier clinique dans un logiciel. La licence ne change pas qui en répond : c'est toujours le cabinet.*

## « Libre » ne veut pas dire « gratuit »

La Free Software Foundation ouvre sa définition par cette distinction : il s'agit « de liberté, pas de prix », et il faut penser à « free » comme dans « liberté d'expression », pas comme dans « entrée libre ». La même page rappelle que vous avez pu payer vos copies et conserver malgré tout toutes les libertés.

En pratique, l'argent ne disparaît pas. Il change de place.

| Poste | Propriétaire, hébergé par l'éditeur | Libre, sur votre serveur |
|---|---|---|
| Licence | ~ Par utilisateur, par fauteuil ou par site | ✓ Aucun coût de licence |
| Serveur et stockage | ✓ Compris dans l'abonnement | ✗ À votre charge |
| Sauvegardes | ✓ Chez l'éditeur, selon sa politique | ✗ Les vôtres, et à tester |
| Mises à jour | ✓ Appliquées pour vous | ~ Les vôtres ou celles d'un prestataire |
| Support | ✓ Inclus ou contractualisé | ~ Communauté, ou contrat séparé |
| Partir | ~ Dépend de leur export | ✓ Vous avez déjà données et code |

Un petit serveur bien fait coûte peu. Le temps de la personne qui le met à jour, surveille les sauvegardes et répond quand ça casse n'est pas nul, et c'est le chiffre que personne ne met dans le tableau. Avant de trancher, il vaut la peine de lire ce qu'implique réellement le fait d'[héberger soi-même un logiciel de santé](/fr/blog/auto-heberger-logiciel-sante/).

## Lire une licence en dix minutes

Pas besoin d'un avocat pour le premier passage. Il faut ouvrir cinq choses et noter ce qu'elles disent.

1. **Cherchez le fichier LICENSE dans le dépôt public.** S'il n'y a pas de dépôt, la réponse est déjà là : c'est propriétaire. Cela ne disqualifie rien, cela indique seulement quelles questions poser ensuite.
2. **Vérifiez si le nom de la licence figure sur la liste de l'OSI.** GPL, AGPL, Apache et MIT y sont. La BSL et la famille « source available » non.
3. **Cherchez les mots « Use Limitation » ou « Additional Use Grant ».** Si des usages sont exclus, ce n'est pas une licence libre, aussi public que soit le code.
4. **Cherchez une « Change Date ».** Certaines licences deviennent libres après un délai, souvent quatre ans, ce qui change le calcul à long terme.
5. **Demandez si le code publié est celui que vous exécutez.** Un dépôt figé sur une version d'il y a deux ans n'est pas un filet de sécurité.
6. **Demandez un export complet avant de signer.** Le [format qu'il faut exiger](/fr/blog/exporter-donnees-logiciel-dentaire/) compte davantage que la licence le jour où vous voudrez partir.

> **Si vous ne faites qu'une vérification, faites la dernière.** Un export ouvert et testé vous protège dans les trois catégories. Une licence libre sans données exportables ne sauve aucune migration.

![Écran des rapports du cabinet](/screenshots/reports.png)

*Les rapports se reconstruisent à partir des données. C'est pourquoi la bonne question avant de signer porte sur le format de sortie, pas sur la licence d'entrée.*

## Ce qui change en décembre 2027

Le règlement (UE) 2024/2847 du 23 octobre 2024, dit règlement sur la cyberrésilience, fixe des exigences de cybersécurité pour les produits comportant des éléments numériques. Son article 71 prévoit une application à compter du **11 décembre 2027**, l'article 14 s'appliquant dès le 11 septembre 2026 et le chapitre IV dès le 11 juin 2026.

Le texte vise les fabricants et les distributeurs, pas votre cabinet, mais il change l'identité de celui à qui vous pouvez demander des comptes.

- **Le logiciel commercial est dans le champ, libre ou propriétaire.** Ce qui compte, c'est qu'il soit fourni dans le cadre d'une activité commerciale.
- **Le libre non monétisé en est exclu.** Le considérant 18 précise que la fourniture de logiciels libres et ouverts « qui ne sont pas monétisés par leur fabricant ne devrait pas être considérée comme une activité commerciale ».
- **Une figure nouvelle apparaît, l'« intendant de logiciels ouverts »**, définie à l'article 3, point 14, pour les personnes morales qui soutiennent durablement le développement de projets libres destinés à des activités commerciales, avec des obligations plus légères qu'un fabricant.

La lecture pratique pour un cabinet est courte : à partir de cette date, un projet communautaire sans société derrière et un produit commercial ne répondent pas de la même manière, et il vaut mieux savoir lequel des deux on installe.

## Cela existe déjà en santé

Ce n'est pas une hypothèse de laboratoire. GNU Health se présente comme « l'écosystème libre de santé numérique, où la médecine sociale rencontre l'informatique de santé de pointe » et publie des déploiements dans des hôpitaux et des ministères de plusieurs pays. OpenEMR se décrit comme « la solution open source de dossier patient informatisé et de gestion de cabinet la plus répandue » et indique être certifié ONC aux États-Unis.

Aucun des deux n'est un logiciel dentaire, et c'est justement le point : la question de la licence se répond de la même façon dans toutes les spécialités.

## La question qui tranche

Il n'y en a qu'une : **si cette société disparaît demain, qu'est-ce qui tourne encore ?**

Si la réponse comprend le code source, les données dans un format ouvert et un serveur que vous contrôlez, la licence a fait son travail. Si elle n'en comprend aucun des trois, aucune clause ne remplacera cela.

Dentalpin appartient à la catégorie du milieu, et autant le dire précisément : le code est public sous BSL 1.1, avec une limitation d'usage qui exclut d'en faire un SaaS concurrent, et avec bascule automatique vers Apache 2.0, une véritable licence libre, quatre ans après chaque publication. L'installation se fait sur votre serveur, la base de données est PostgreSQL et les [tarifs](/fr/tarifs/) sont publiés.

## Sources

Toutes consultées le 27 août 2026.

- Open Source Initiative, *The Open Source Definition*, version 1.9. [opensource.org](https://opensource.org/osd)
- Free Software Foundation, *What is Free Software?*, les quatre libertés. [gnu.org](https://www.gnu.org/philosophy/free-sw.html)
- MariaDB, *Business Source License 1.1*, texte de la licence et mention « is not an Open Source license ». [mariadb.com](https://mariadb.com/bsl11/)
- Règlement (UE) 2016/679 (RGPD), articles 4.7, 24.1, 28.1 et 28.3.g. [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32016R0679)
- Règlement (UE) 2017/745 relatif aux dispositifs médicaux, article 2.1. [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32017R0745)
- Règlement (UE) 2024/2847 (règlement sur la cyberrésilience), considérant 18, article 3.14 et article 71. [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R2847)
- GNU Health, site du projet. [gnuhealth.org](https://www.gnuhealth.org/)
- OpenEMR, site du projet. [open-emr.org](https://www.open-emr.org/)
- Dentalpin, fichier LICENSE du dépôt (Business Source License 1.1).

Ceci n'est pas un conseil juridique. La qualification d'un logiciel en dispositif médical et le partage des responsabilités en matière de données personnelles dépendent du cas concret. Consultez votre conseil avant de décider.
