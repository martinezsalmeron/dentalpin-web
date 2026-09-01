---
title: "Ce qu'est la licence BSL et ce qu'elle vous autorise"
description: "La BSL permet de télécharger, auditer et exécuter le logiciel sur votre serveur, interdit de le revendre en SaaS et expire : chaque version devient open source."
pubDate: 2026-09-01
translationKey: licencia-bsl-explicada
tags: [licences, open-source, bsl, contrats, logiciel-dentaire]
---

La Business Source License vous laisse télécharger le code, le lire, le modifier et l'exécuter sur votre propre serveur sans rien payer. Elle interdit une seule chose : revendre ce même logiciel comme service commercial concurrent de celui qui le publie. Et elle expire, car chaque version passe automatiquement sous une véritable licence open source, au plus tard quatre ans après sa publication.

C'est cette troisième partie que presque personne ne lit, et c'est elle qui décide si la licence vous convient.

> **La BSL n'est pas une licence open source, et elle le dit elle-même.** Son propre avis commence ainsi : « The Business Source License (this document, or the "License") is not an Open Source license. However, the Licensed Work will eventually be made available under an Open Source License, as stated in this License ».

## Les cinq cases que remplit l'éditeur

La BSL n'est pas une licence figée comme la MIT ou la GPL, dont le texte est toujours identique. C'est un modèle avec cinq cases à remplir, et c'est celui qui publie le logiciel qui les remplit.

Autrement dit, « c'est sous BSL » ne vous dit pas encore ce que vous avez le droit de faire. Il faut regarder les cases.

| Paramètre | Ce qu'il définit |
|---|---|
| Licensor | Qui publie le logiciel, et à qui vous achetez si une licence commerciale devient nécessaire |
| Licensed Work | Quel logiciel et quelles versions exactes cette licence couvre |
| Additional Use Grant | Quel usage en production est autorisé gratuitement |
| Change Date | La date à laquelle cette version change de licence toute seule |
| Change License | La licence open source vers laquelle elle bascule ce jour-là |

Deux de ces cinq cases constituent toute la négociation : l'**Additional Use Grant**, qui fixe jusqu'où vous pouvez l'utiliser gratuitement en production, et la **Change Date**, qui fixe le moment où la restriction cesse de compter.

L'exemple publié par les auteurs de la licence eux-mêmes est MariaDB MaxScale. Son Additional Use Grant dit : « You may use the Licensed Work when your application uses the Licensed Work with a total of less than three server instances in production ». Moins de trois serveurs, c'est gratuit. Au-delà, licence commerciale.

## Ce que la BSL autorise et ce qu'elle refuse

Le texte de base accorde le droit de copier, de modifier, de créer des œuvres dérivées, de redistribuer et de faire un usage non productif. L'usage en production, lui, dépend de la case ci-dessus.

| Action | Sous une licence BSL |
|---|---|
| Télécharger et lire tout le code | ✓ Toujours autorisé |
| Le modifier pour votre cas | ✓ Toujours autorisé |
| Le redistribuer avec la licence jointe | ✓ Toujours autorisé |
| L'utiliser en test et en développement | ✓ Toujours autorisé |
| L'utiliser en production | ~ Seulement dans la limite de l'Additional Use Grant |
| Le revendre comme service commercial concurrent | ✗ Licence commerciale obligatoire |

La ligne ambre est la seule à lire attentivement. « Production » désigne l'usage réel dont sort de la valeur économique, c'est-à-dire votre cabinet qui reçoit de vrais patients, pas une installation d'essai sur un portable.

## Ne pas être open source n'est pas un défaut, mais c'est une information

L'Open Source Initiative maintient la définition de l'open source, et sa clause 6 énonce que « la licence ne doit restreindre personne dans l'usage du programme dans un domaine d'activité déterminé ». Une BSL restreint précisément cela : un domaine d'activité, celui de monter un SaaS concurrent.

C'est pour cette raison qu'elle ne figure pas sur la liste des licences approuvées par l'OSI, et pour cette raison que son propre texte prend les devants et le dit.

En pratique, cela vous touche à deux endroits précis :

- **Dans un marché public ou un cahier des charges** qui exige « un logiciel open source » avec ces mots, une BSL ne remplit pas la condition formelle, même si tout le code est publié.
- **Dans l'audit de votre prestataire informatique**, où cela ne change rien. Il peut lire le code, le compiler et vérifier ce qu'il fait des données exactement de la même façon.

## La date de bascule est la clause qui vous protège vraiment

C'est ce qui distingue la BSL d'un logiciel propriétaire qui montrerait son code. La restriction a une date de péremption, et elle est écrite dans le fichier lui-même.

La version 1.1 de la licence a posé un plafond : la date de bascule ne peut pas dépasser quatre ans après la première distribution publique de cette version. Et la licence d'arrivée doit être la GPL v2, la GPL v3 ou une licence compatible, donc une véritable licence open source.

> **La date de bascule s'applique version par version, pas au projet entier.** La version que vous avez installée cette année a sa propre date, et celle qui sortira dans deux ans aura la sienne. Le compte à rebours de votre installation a démarré le jour où cette version a été publiée, pas le jour où vous l'avez installée.

![Dossier patient avec les alertes cliniques, le plan de traitement en cours et une chronologie filtrable par visites, actes, encaissements et communications](/screenshots/patient-timeline.png)

*Des années de dossiers cliniques dans un logiciel. La date de bascule décide de ce que vous pourrez en faire si l'éditeur disparaît.*

Dit autrement : la BSL vous donne un séquestre de code source que vous n'avez pas eu à négocier. Si l'éditeur ferme, la version que vous faites tourner devient quand même open source le jour prévu, et n'importe quel développeur compétent peut la maintenir à partir de là. Avec une licence propriétaire classique, ce jour n'existe pas.

## Comment lire n'importe quelle licence BSL en cinq minutes

Pas besoin d'un avocat pour la première lecture. Ouvrez le fichier `LICENSE` du dépôt et cherchez ces cinq éléments, dans cet ordre :

1. **Vérifiez la version de la licence.** Elle doit indiquer « Business Source License 1.1 ». La 1.0 n'avait pas le plafond de quatre ans.
2. **Lisez l'Additional Use Grant en entier.** C'est la seule phrase qui décide si votre usage réel est gratuit. S'il n'y en a pas, le texte de base n'accorde que l'usage non productif.
3. **Regardez la Change Date.** Ce peut être une date fixe ou une formule (« quatre ans après la publication »). Au-delà de quatre ans, on sort de ce que la 1.1 autorise.
4. **Regardez la Change License.** Si elle indique Apache 2.0, GPL ou MPL, vous savez exactement ce que vous aurez ce jour-là, car ce sont des licences standard au texte public.
5. **Repérez le Licensed Work.** S'il nomme des versions précises, la licence s'applique à celles-là, et les suivantes peuvent sortir sous d'autres conditions.

Si les cinq cases sont remplies et lisibles, vous en savez déjà plus sur ce logiciel que la plupart de ceux qui l'installent.

> **Ceci n'est pas un conseil juridique.** C'est la lecture d'un document public. Pour un contrat signé, un marché public ou toute question sur votre situation précise, la réponse doit venir d'un avocat.

## Ce que cela change pour un cabinet dentaire

La plupart de ces clauses sont écrites en pensant aux éditeurs de logiciels, pas à un cabinet. Traduit en ce qui vous concerne :

- **La restriction de la BSL ne vous concerne presque jamais.** Elle interdit de monter un SaaS concurrent. Un cabinet qui utilise le logiciel pour ses propres patients n'est pas dans ce cas, dès lors que l'Additional Use Grant couvre cet usage.
- **Vous pouvez l'installer sur votre propre serveur** et le faire tourner sans demander d'autorisation ni activer quoi que ce soit, ce qui est la plus grosse différence pratique avec un logiciel sous licence par poste.
- **Votre prestataire peut réellement l'auditer.** Il peut lire ce qui est stocké, où, et ce qui sort du cabinet, sans signer d'accord de confidentialité avec personne.
- **Vous avez une sortie écrite.** La date de bascule est dans le fichier, pas dans une promesse commerciale.

![Schéma de l'installation auto-hébergée : navigateur, Caddy sur le port 443, frontend Nuxt, API et base de données PostgreSQL](/diagrams/install-stack.svg)

*Le montage qu'autorise ce type de licence : tout tourne sur un serveur qui vous appartient, sans activation auprès de l'éditeur.*

## La licence de Dentalpin, case par case

Dentalpin est publié sous BSL 1.1, vous pouvez donc lui appliquer les cinq vérifications ci-dessus. Son fichier `LICENSE` indique, littéralement :

- **Licensor :** DentalPin Contributors.
- **Licensed Work :** DentalPin.
- **Use Limitation :** « You may not use the Licensed Work for providing a commercial Software-as-a-Service (SaaS) offering for dental clinic management where the primary value is substantially derived from the Licensed Work ».
- **Change Date :** quatre ans après la publication de l'œuvre licenciée.
- **Change License :** Apache License, Version 2.0.

Dans la foire aux questions du produit, nous le résumons ainsi : gratuit pour tout cabinet et tout développeur, avec pour seule restriction de ne pas le lancer comme SaaS dentaire concurrent, et avec un passage automatique à Apache 2.0 au bout de quatre ans. Ce que cela coûte et ce qui est inclus figure sur la [page des tarifs](/fr/tarifs/).

## Sources

- [Business Source License 1.1, texte de la licence](https://mariadb.com/bsl11/), MariaDB. Consulté le 1er septembre 2026.
- [Adopting and Developing BSL Software (FAQ)](https://mariadb.com/bsl-faq-adopting/), MariaDB. Consulté le 1er septembre 2026.
- [Releasing BSL 1.1](https://mariadb.com/resources/blog/releasing-bsl-1-1/), MariaDB. Consulté le 1er septembre 2026.
- [Projects using BSL 1.1](https://mariadb.com/projects-using-bsl-11/), MariaDB. Consulté le 1er septembre 2026.
- [The Open Source Definition](https://opensource.org/osd), Open Source Initiative. Consulté le 1er septembre 2026.
- Fichier `LICENSE` du dépôt Dentalpin. Consulté le 1er septembre 2026.
