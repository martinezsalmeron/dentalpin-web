---
title: "Le jour où internet tombe : faire tourner le cabinet dentaire sans connexion"
description: "Ce qui s'arrête au cabinet dentaire quand la ligne tombe, ce qui continue de fonctionner, quoi préparer à l'avance et dans quel ordre tout reprendre après."
pubDate: 2026-09-13
translationKey: clinica-sin-internet
tags: [continuite, infrastructure, agenda, gestion-cabinet]
---

Si votre logiciel tourne dans le navigateur contre le serveur de quelqu'un d'autre, une coupure arrête le cabinet entier, agenda, dossier clinique et odontogramme compris. S'il tourne sur un serveur installé dans les murs, vous perdez les rappels, la prise de rendez-vous en ligne, la télétransmission et sans doute le terminal de paiement, mais vous pouvez toujours ouvrir l'agenda du jour et écrire dans le dossier.

Savoir laquelle des deux situations est la vôtre décide de tout le reste, et cela se vérifie aujourd'hui plutôt que le mardi où cela arrive. Voici ce qui tombe exactement, ce qu'il faut avoir préparé, ce qu'il faut noter pendant la panne et dans quel ordre tout reprendre ensuite.

## Là où tourne le logiciel décide de ce que vous perdez

Il n'y a pas de réponse unique à "est-ce qu'on peut travailler sans internet", parce que trois architectures différentes se cachent derrière le mot logiciel et que chacune se comporte à sa façon.

| Ce que vous devez faire | Navigateur contre serveur distant | Serveur dans le cabinet | Programme installé sur chaque poste |
|---|---|---|---|
| Ouvrir l'agenda du jour | ✗ Non | ✓ Oui | ✓ Oui |
| Consulter le dossier et l'odontogramme | ✗ Non | ✓ Oui | ✓ Oui |
| Saisir notes, devis et factures | ✗ Non | ✓ Oui | ✓ Oui |
| Afficher les radios déjà enregistrées | ✗ Non | ✓ Oui | ~ Selon l'endroit où sont les images |
| Rappels, rendez-vous en ligne, portail patient | ✗ Non | ✗ Non | ✗ Non |
| Sauvegarde hors du cabinet | ✗ Non | ~ Reprend au retour de la ligne | ~ Reprend au retour de la ligne |

La ligne qui surprend le plus est celle des radios. Un capteur peut être câblé au réseau local et écrire dans un dossier du cabinet, ou téléverser vers le service du fabricant, et depuis l'accueil les deux se ressemblent jusqu'au jour où il n'y a plus de ligne.

![Schéma du déploiement : navigateur, Caddy sur le port 443, frontend Nuxt, API et PostgreSQL avec ses volumes de données](/diagrams/install-stack.svg)

*Le navigateur, Caddy, le frontend, l'API et la base de données. Le schéma ne dit pas où se trouve physiquement cette machine, et c'est précisément la question à régler avant une panne.*

## Ce qui tombe, dans l'ordre où vous allez le remarquer

- **La prise de rendez-vous en ligne s'arrête sans bruit.** Personne ne vous prévient : les créneaux ne se remplissent tout simplement pas pendant ces heures, et rien ne permet de savoir combien ont été perdus.
- **Les rappels ne partent pas.** SMS, WhatsApp et courriels partent depuis l'extérieur du cabinet, donc la série de demain ne sort pas même si le logiciel local fonctionne.
- **Le terminal de paiement dépend de son raccordement.** Ceux qui passent par le réseau du cabinet deviennent muets, ceux qui ont leur propre carte SIM continuent en général d'encaisser. C'est une question d'une ligne à poser à votre prestataire monétique, et elle se pose avant.
- **La télétransmission et tout envoi vers un système externe s'arrêtent.** Les flux restent en attente, et cela vaut aussi pour la facturation électronique.
- **La sauvegarde externalisée ne se fait pas cette nuit-là** si la ligne est encore coupée à la fermeture. Une nuit, ce n'est pas grave. Deux semaines sans que personne ne lise les alertes d'échec, si.
- **La messagerie et le téléphone en voix sur IP sont aussi de l'internet.** Beaucoup de cabinets découvrent à ce moment précis que leur seul numéro passait par le même routeur.

## Le SLA de votre éditeur n'est pas celui de votre ligne

Un taux de disponibilité de 99,9 % donne l'impression qu'il ne se passe jamais rien. Cela fait 43 minutes par mois et 8 heures et 46 minutes par an. Le 99,5 % que l'on voit aussi publié représente environ trois heures et demie par mois et près de 44 heures par an.

Ces chiffres ne couvrent de toute façon que le serveur de l'éditeur. Votre connexion est un contrat séparé, et un accès professionnel standard ne comporte le plus souvent aucun engagement de disponibilité.

> **La plupart des pannes d'un petit cabinet commencent sur le trottoir, pas dans le centre de données.** Des travaux, une armoire de fibre ouverte ou un routeur de sept ans ne figurent dans le SLA de personne, et ce sont les causes habituelles d'une matinée sans ligne.

## Le kit de panne

Rien de tout cela n'est cher, et tout doit exister avant, parce que le moment d'aller chercher n'est pas celui où quatre personnes attendent à l'accueil.

1. **Imprimez l'agenda du lendemain avant de fermer.** Une feuille : nom, heure, fauteuil et acte prévu. C'est la pièce qui transforme une panne en désagrément plutôt qu'en journée perdue.
2. **Prévoyez une seconde voie de données déjà testée**, un routeur avec carte SIM ou le partage de connexion d'un téléphone. Testée veut dire que quelqu'un l'a déjà allumée, pas qu'elle dort dans un tiroir.
3. **Mettez un onduleur sur le serveur et aussi sur le routeur**, parce qu'un serveur vivant derrière un routeur mort ne sert à rien.
4. **Gardez des consentements et des feuilles de suivi imprimés**, les cinq ou six que vous utilisez vraiment.
5. **Conservez la liste des téléphones du jour hors du système**, c'est ce qui permet de prévenir le patient de 17 heures.
6. **Écrivez qui fait quoi** : qui appelle l'opérateur, qui prévient les patients, qui est chargé de noter ce qui se passe.

![Agenda en vue journée avec les rendez-vous répartis sur les plages horaires](/screenshots/schedule-day.png)

*Voilà l'écran qui doit pouvoir sortir sur papier la veille au soir, pas le matin où l'on en a besoin.*

## Ce qu'il faut noter pendant la panne

Travailler sans connexion n'est pas le problème. Le problème, c'est de revenir et de ne pas savoir ce qui s'est passé entre neuf heures et treize heures.

- **Qui est venu et qui ne l'est pas**, avec l'heure réelle, pour que les rendez-vous non honorés soient enregistrés là où il faut.
- **Ce qui a été fait pour chaque patient**, avec le niveau de détail que vous mettriez au dossier, pas un résumé de trois mots.
- **Les numéros de lot des implants et des matériaux** que le logiciel remplit d'habitude tout seul. C'est ce qui se perd le plus souvent et le plus difficile à reconstituer après.
- **Chaque encaissement**, montant, moyen de paiement et acte auquel il se rattache.
- **Les coordonnées complètes des nouveaux patients**, parce qu'une fiche saisie de mémoire trois heures plus tard est une fiche avec des erreurs dedans.
- **Qui a appelé et pourquoi**, annulations comprises, ce sont elles qui désorganisent l'agenda du lendemain.

> **Ce qui n'est pas noté pendant la panne ne se récupère pas après.** Le logiciel revient avec tout ce qu'il avait à neuf heures, et ce qui s'est passé entre-temps n'existe que sur le papier rempli par quelqu'un.

## Reprendre la journée quand la ligne revient

L'ordre compte, parce que certaines étapes dépendent des autres et parce que la tentation est de commencer par le facile.

1. **Vérifiez d'abord que la sauvegarde de la nuit a bien tourné**, et lancez-en une maintenant si ce n'est pas le cas.
2. **Créez les fiches des nouveaux patients en premier**, tout le reste s'y rattache.
3. **Reportez les notes cliniques du papier**, patient par patient, le jour même. Le lendemain, plus personne ne se souvient de ce que voulait dire une abréviation.
4. **Saisissez les encaissements** et rapprochez-les du terminal et de la caisse.
5. **Corrigez l'agenda** : absences, annulations prises par téléphone et tout ce qui a été déplacé.
6. **Regardez quels rappels ne sont pas partis** et décidez lesquels valent encore la peine. Un rappel pour un rendez-vous déjà passé fait plus de mal que pas de rappel du tout.
7. **Gardez le papier jusqu'à vérification complète de la saisie**, puis détruisez-le comme le reste de la documentation clinique.

## Ce que le RGPD attend que vous ayez anticipé

La disponibilité n'est pas un supplément à la sécurité, c'est l'une des trois propriétés que le règlement nomme. L'article 32, paragraphe 1, cite parmi les mesures techniques et organisationnelles appropriées :

> **b) des moyens permettant de garantir la confidentialité, l'intégrité, la disponibilité et la résilience constantes des systèmes et des services de traitement ; c) des moyens permettant de rétablir la disponibilité des données à caractère personnel et l'accès à celles-ci dans des délais appropriés en cas d'incident physique ou technique.**

Une coupure de deux heures n'est pas en soi une violation à notifier. Ce qui relève bien de cet article, c'est de ne pas pouvoir accéder au dossier d'un patient installé au fauteuil, ou de perdre le travail d'une matinée parce que personne n'avait pensé au papier.

Ceci n'est pas un conseil juridique. Pour votre situation précise, votre délégué à la protection des données ou votre conseil sont les bons interlocuteurs.

## Cinq questions à poser à votre éditeur avant d'en avoir besoin

- **Quelles parties exactes du produit continuent de fonctionner si le cabinet perd sa ligne ?** Une liste est une bonne réponse. "Tout est dans le cloud, ne vous inquiétez pas" n'en est pas une.
- **Où se trouve physiquement la base de données**, et ce qu'il faudrait pour y accéder sans vous.
- **Publiez-vous un SLA, à quel pourcentage et que compense-t-il** en cas de manquement.
- **Que deviennent les rappels qui ne sont pas partis ?** Sont-ils réessayés, perdus, ou empilés puis envoyés d'un coup.
- **Puis-je exporter l'agenda de demain en PDF ou en CSV moi-même**, sans ouvrir de ticket.

Les réponses à ces cinq questions en disent plus sur un produit que la moitié de sa page de fonctionnalités.

Dentalpin s'installe sur une machine du cabinet, ce qui fait d'une coupure une panne de communications et non une panne de dossier clinique : l'agenda, l'odontogramme et la facturation restent ouverts sur le réseau local pendant que rien n'est joignable à l'extérieur. Les conditions des versions hébergée et auto-hébergée sont sur la page [tarifs](/fr/tarifs/), et pour voir à quoi ressemble le montage avant de décider, [l'installer prend trois minutes](/fr/blog/installer-dentalpin-en-trois-minutes/).

## Sources

- Règlement (UE) 2016/679 (RGPD), article 32, paragraphe 1, points b) et c). [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consulté le 13 septembre 2026.
