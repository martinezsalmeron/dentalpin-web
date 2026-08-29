---
title: "TPE au cabinet dentaire : rapprocher les encaissements sans pointer à la main"
description: "Pourquoi le virement bancaire ne correspond jamais à la recette du jour, quels trois totaux comparer et à quelle fréquence, et quoi demander avant de signer."
pubDate: 2026-08-29
translationKey: tpv-datafono-clinica-dental
tags: [tpe, encaissements, rapprochement, gestion-cabinet, logiciel-dentaire]
---

Un cabinet qui encaisse par carte manipule trois totaux différents chaque jour, et deux seulement sont censés correspondre : ce que le logiciel enregistre comme réglé par carte, et le total de la remise du TPE. Le troisième, ce qui arrive sur le compte, ne correspondra à aucun des deux, et ce n'est pas son rôle.

Presque tous les secrétariats qui ont renoncé à rapprocher les encaissements par carte ont renoncé pour la même raison. Ils ont voulu faire coïncider le virement bancaire avec la recette d'une journée, ce qui ne tombe jamais juste.

## Trois totaux, et lequel se compare à lequel

Les distinguer, c'est déjà la moitié du travail. Chacun est produit ailleurs et par un chemin différent, et c'est précisément ce qui rend la comparaison utile.

- **Les règlements par carte selon le logiciel.** Ce que l'accueil a saisi aujourd'hui comme payé par carte, patient par patient.
- **La remise du TPE.** Le total que le terminal lui même a autorisé depuis la dernière clôture, en général ventilé par type de carte.
- **Le virement de la banque.** Ce que l'accepteur verse sur le compte, selon son propre calendrier et sa propre façon de prélever les commissions.

La règle tient en deux lignes. Logiciel contre TPE, **tous les jours**, et les deux doivent tomber sur le même chiffre. TPE contre banque, **une fois par mois**, et les deux ne tomberont pas sur le même chiffre.

> **Pointer la banque contre la recette du jour est la tâche impossible qui fait abandonner le rapprochement.** Le virement arrive en décalé, groupé, parfois net de commissions. Le comparer à une seule journée ne peut pas tomber juste, même quand tout a été bien fait.

## La clôture quotidienne, en cinq minutes

La faire toujours dans le même ordre est ce qui la maintient à cinq minutes, parce que personne n'a de décision à prendre pendant qu'il la fait.

1. **Clôturez le TPE à la même heure chaque jour**, après le dernier patient et avant d'éteindre quoi que ce soit. Un terminal clôturé quand quelqu'un y pense mélange les journées et cesse d'être comparable.
2. **Sortez le total de la remise**, ventilé par type de carte si le terminal l'imprime ainsi.
3. **Sortez du logiciel la liste des règlements par carte du jour**, avec le montant et le patient.
4. **Comparez les deux totaux.** S'ils correspondent, notez les deux chiffres et c'est terminé.
5. **S'ils diffèrent, cherchez l'opération et non l'écart.** Triez les deux listes par montant : celle qui est en trop ou qui manque saute aux yeux toute seule.
6. **Corrigez le jour même**, avec une note expliquant ce qui s'est passé. Un écart expliqué demain est un écart. Expliqué en octobre, c'est une discussion.

L'étape cinq est celle que l'on saute. Chercher « il manque 47 euros » ne mène nulle part. Chercher « il y a une opération de 47 euros sur le TPE absente du logiciel » retrouve le patient en trente secondes.

![Liste des factures avec leur statut : émises, réglées, réglées en partie, échues et brouillons](/screenshots/invoices.png)

*La liste des règlements du jour est le chiffre auquel la remise du terminal est comparée. S'il faut la reconstituer à la main, le rapprochement est abandonné en quinze jours.*

## Pourquoi la banque ne correspond jamais

Les écarts entre le TPE et la banque ne sont presque jamais des erreurs. C'est le fonctionnement du système, et les connaître évite des appels à l'accepteur qui ne mènent à rien.

| Cause | Ce qu'elle produit |
|---|---|
| Heure de coupure du terminal | Un règlement de 20h30 peut basculer dans la remise du lendemain |
| Week-ends et jours fériés | Vendredi, samedi et dimanche arrivent souvent en un seul virement le lundi ou le mardi |
| Commissions prélevées à la source | Selon le contrat, le virement arrive net et le montant brut ne figure sur aucune ligne |
| Remboursements | Déduits du versement plutôt qu'affichés à part |
| Impayés et contestations | Apparaissent des semaines plus tard, sans rendez vous rattaché |

Aucune de ces cinq causes n'est une erreur de l'accueil. Celles qui en sont se trouvent toutes dans l'autre comparaison, logiciel contre TPE.

## Les écarts qui sont de vraies erreurs

Entre le logiciel et le terminal il n'y a que cinq causes courantes, et toutes se corrigent immédiatement si elles sont vues le jour même.

- **Le règlement que personne n'a saisi.** Le patient paie, le téléphone sonne, rien n'est enregistré. De loin le plus fréquent.
- **Le mauvais mode de règlement.** Encaissé en espèces et saisi en carte, ou l'inverse. Le total de la journée est bon et le rapprochement est faux.
- **Le paiement partagé.** Une partie par carte, une partie en espèces, saisi comme un seul règlement.
- **Le remboursement à moitié fait.** Remboursé sur le TPE mais jamais annulé dans le dossier, si bien que le patient figure toujours comme ayant payé.
- **L'opération refusée saisie quand même.** Le terminal l'a rejetée, le patient a payé autrement, et les deux écritures sont restées.

> **Conservez la référence du TPE à côté du règlement.** Le numéro d'opération, ou le code d'autorisation et les quatre derniers chiffres, transforme une après midi de recherche en trente secondes. Cela ne coûte rien et c'est la seule chose à noter en plus.

## Ce que coûte vraiment l'encaissement par carte

Il y a ici un malentendu qui coûte cher en négociation. La commission d'interchange est ce que la banque du patient facture à celle du cabinet, et le règlement (UE) 2015/751 la plafonne à 0,2 % sur les cartes de débit des consommateurs et 0,3 % sur les cartes de crédit.

Ce plafond n'est pas ce que paie le cabinet. Le cabinet paie la commission commerçant, qui porte en plus la commission du réseau (Visa, Mastercard) et la marge de l'accepteur. L'écart entre les deux chiffres est large, et c'est là que se joue la négociation.

Les tarifs publiés le montrent. SumUp affiche une formule sans abonnement à **1,75 % par paiement en personne**, et une formule à **19 € par mois qui descend à 0,89 %** sur les cartes bancaires domestiques (consulté le 29 août 2026). Face à un plafond d'interchange de 0,2 %, la différence est le prix du service, pas celui de la réglementation.

Les banques accepteurs, elles, ne publient presque rien et négocient au contrat : le seul chiffre fiable est celui du vôtre.

## Répercuter le coût sur le patient : ce n'est pas possible

C'est la première idée qui vient devant une commission, et en France elle est fermée. L'article L112-12 du code monétaire et financier, dans sa version en vigueur depuis le 13 janvier 2018, dit :

> **« Le bénéficiaire ne peut appliquer de frais pour l'utilisation d'un instrument de paiement donné. »**

Un montant minimum pour payer par carte est la même idée déguisée, et elle appelle le même problème. Ce que le texte autorise, c'est l'inverse : proposer une réduction pour un moyen de paiement donné, à condition d'en informer le patient avant l'opération.

Ceci n'est pas un conseil juridique, et pour un cas précis la réponse appartient à votre conseil.

![Tableau de bord des indicateurs du cabinet avec l'évolution de l'activité](/screenshots/reports.png)

*Un mois de totaux par mode de règlement est ce contre quoi un contrat monétique se relit. Une commission mal appliquée se voit dans la tendance, pas sur un règlement isolé.*

## Quoi demander avant de signer

Ces six questions déplacent le coût réel bien plus que marchander le pourcentage affiché, et les trois premières décident si le rapprochement sera possible.

1. **Le tarif est il forfaitaire ou interchange++ ?** Un tarif forfaitaire masque quelles cartes coûtent cher et rend impossible de vérifier si le plafond d'interchange vous est répercuté.
2. **Le virement arrive t il brut avec une facture mensuelle, ou net de commissions ?** C'est ce qui décide si la ligne bancaire peut un jour égaler une remise.
3. **Quelle est l'heure de coupure et quels jours versez vous ?** Sans cela, personne ne peut dire à quelle journée appartient un règlement du soir.
4. **Qu'y a t il en plus du pourcentage ?** Location du terminal, minimum mensuel, frais PCI, coût par autorisation. Additionnez et divisez par votre chiffre d'affaires carte : voilà votre taux réel.
5. **Quel est le préavis et comment les tarifs sont ils révisés ?** Une hausse unilatérale sous quinze jours n'est pas une révision annuelle négociée.
6. **Puis je exporter les opérations en CSV avec la référence imprimée par le terminal ?** Sinon, le rapprochement mensuel restera manuel pour toujours.

## Par où commencer cette semaine

1. **Fixez l'heure de clôture du TPE** et gardez la identique tous les jours.
2. **Commencez à noter la référence de l'opération** en face de chaque règlement par carte.
3. **Comparez les deux totaux demain** et notez les deux chiffres, qu'ils correspondent ou non.
4. **Ressortez le contrat monétique** et calculez le taux réel des trois derniers mois.
5. **Bloquez un jour par mois** pour croiser remises, virements et relevé de commissions.

Dentalpin ne dialogue pas avec le TPE, et autant le dire franchement : rien de ce qui est saisi dans un logiciel ne remplace la clôture du terminal. Ce qu'il fait, c'est enregistrer chaque règlement avec son mode de paiement au moment où il est encaissé et permettre de garder la référence de l'opération à côté, si bien que la liste des règlements par carte du jour sort sans rien exporter et que la comparaison se fait contre un chiffre que personne n'a reconstitué. Le détail de chaque version est sur [tarifs](/fr/tarifs/).

## Sources

- Union européenne. *Règlement (UE) 2015/751 du Parlement européen et du Conseil du 29 avril 2015 relatif aux commissions d'interchange pour les opérations de paiement liées à une carte*, articles 3 et 4 (plafonds de 0,2 % et 0,3 %). [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32015R0751). Consulté le 29 août 2026.
- France. *Code monétaire et financier, article L112-12*, version en vigueur depuis le 13 janvier 2018. [legifrance.gouv.fr](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035430410). Consulté le 29 août 2026.
- SumUp. *Tarifs* (formule sans abonnement à 1,75 % en personne ; Paiements Plus, 19 €/mois, 0,89 % sur cartes domestiques). [sumup.com](https://www.sumup.com/fr-fr/tarifs/). Consulté le 29 août 2026.
