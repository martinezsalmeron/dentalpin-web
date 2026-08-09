---
title: "Cloud ou serveur au cabinet dentaire : comment trancher"
description: "Cloud ou serveur au cabinet : ce qui change vraiment, ce que la certification HDS et le RGPD imposent dans les deux cas, et les cinq questions qui décident pour votre cabinet dentaire."
pubDate: 2026-08-09
translationKey: nube-o-servidor-clinica-dental
tags: [cloud, serveur, hds, rgpd]
---

Ce choix ne se joue pas sur la sécurité. Il se joue sur qui répond quand quelque chose casse, et sur le temps qu'il faut au cabinet pour retravailler. Prenez le cloud si personne au cabinet ne veut assumer les sauvegardes et les mises à jour. Prenez un serveur au cabinet s'il faut continuer à soigner quand la connexion tombe, ou si vous voulez les données physiquement sous votre contrôle. Les deux sont légaux, et les deux vous imposent exactement les mêmes obligations écrites.

Voici comment arriver à votre réponse sans dépendre de ce que raconte un commercial.

## La règle française qui change vraiment la donne : le HDS

En France, une question précède toutes les autres. Dès que vous confiez l'hébergement de vos données de santé à un tiers, ce tiers doit être certifié hébergeur de données de santé.

L'Agence du Numérique en Santé rappelle le principe posé par l'article L.1111-8 du code de la santé publique : "Toute personne physique ou morale qui héberge des données de santé à caractère personnel [...] doit être agréée ou certifiée à cet effet." La certification couvre aussi bien l'hébergement d'infrastructure physique que l'infogérance et la sauvegarde externalisée.

> **La question à poser à un éditeur cloud tient en une phrase.** Où sont hébergées les données, et l'hébergeur est-il certifié HDS ? Une réponse évasive sur ce point est une réponse.

L'ANS précise en revanche que les organismes qui gèrent en interne leur propre système d'information ne sont pas concernés par cette obligation de certification. Un cabinet qui héberge ses propres données, sur son propre serveur, n'héberge pas pour le compte d'un tiers. C'est le seul endroit où le serveur au cabinet simplifie franchement le dossier administratif.

![Agenda de la journée dans Dentalpin, avec les rendez-vous par fauteuil et leur statut](/screenshots/schedule-day.png)

*Voici l'écran qui doit s'ouvrir à neuf heures, quelle que soit votre décision.*

## Ce qu'aucune des deux options ne change

Vous restez responsable du traitement dans les deux cas. L'éditeur ou l'hébergeur est sous-traitant, et cela crée deux obligations qui ne disparaissent pas parce que la machine est dans votre arrière-salle.

Le RGPD impose d'abord un choix documenté : l'article 28.1 prévoit que le responsable du traitement "fait uniquement appel à des sous-traitants qui présentent des garanties suffisantes". L'article 28.3 ajoute que ce traitement "est régi par un contrat ou un autre acte juridique" qui lie le sous-traitant.

La deuxième obligation est celle que le plus de cabinets manquent sans le savoir. L'article 32.1.c exige "des moyens permettant de rétablir la disponibilité des données à caractère personnel et l'accès à celles-ci dans des délais appropriés en cas d'incident physique ou technique".

> **Un serveur dans la salle de stérilisation sans restauration testée échoue à ce test, exactement comme un cloud sans sauvegarde.** Le texte ne demande pas où se trouve le disque. Il demande si vous pouvez récupérer les données, et en combien de temps. Si personne n'a jamais tenté une restauration, la réponse honnête est que vous n'en savez rien.

## Trois options, pas deux

La plupart des comparatifs opposent le cloud au serveur du cabinet et oublient la troisième, celle que retiennent souvent les cabinets à l'aise techniquement : votre propre instance, sur un serveur loué.

| | Cloud de l'éditeur | Serveur au cabinet | Votre instance sur un VPS |
|---|---|---|---|
| Qui applique les mises à jour | ✓ L'éditeur | ✗ Quelqu'un du cabinet ou son prestataire | ~ Vous, sans matériel à toucher |
| Si la connexion tombe | ✗ Plus personne ne travaille | ✓ Continue sur le réseau local | ✗ Plus personne ne travaille |
| Qui répond de la sauvegarde | ~ L'éditeur la fait, la vérifier reste à vous | ✗ Entièrement vous | ✗ Entièrement vous |
| Matériel à entretenir | ✓ Aucun | ✗ Machine, disque, onduleur et leur remplacement | ✓ Aucun |
| Coût de départ | ✓ Aucun | ✗ Achat de la machine | ~ Faible |
| Certification HDS | Obligatoire pour l'hébergeur | Hors champ si vous hébergez vos propres données | Obligatoire pour l'hébergeur |
| Ce qu'il faut pour partir | Un export complet qu'on doit vous remettre | ✓ Vous l'avez déjà | ✓ Vous l'avez déjà |

Les deux extrêmes de ce tableau ne se battent pas sur le même terrain. Le cloud vous enlève du travail et vous lie à un fournisseur. Le serveur au cabinet vous donne le contrôle et donne à quelqu'un un travail à faire tous les mois.

## Le test qui tranche : la journée où ça tombe

Avant de comparer les tarifs, chiffrez deux choses.

1. **Combien de temps le cabinet tient sans le logiciel.** Si la réponse est "une demi-journée, sur papier", presque toutes les options conviennent. Si c'est "une heure", il vous faut un plan écrit, y compris avec un serveur au cabinet.
2. **Ce que coûte cet arrêt.** Fauteuils fois heures fois facturation moyenne. C'est le seul chiffre qui transforme ce choix en comparaison économique plutôt qu'en affaire de goût.
3. **Qui décroche le lundi à neuf heures.** Avec le cloud, c'est le support de l'éditeur, avec des horaires publiés. Avec votre serveur, c'est votre prestataire, et mieux vaut connaître son délai réel avant d'en avoir besoin.
4. **Ce qui se perd entre la dernière sauvegarde et la panne.** Une sauvegarde nocturne, c'est une journée de travail perdue. Si ce n'est pas acceptable, la fréquence devient une exigence, pas un détail.
5. **Comment vous partez.** Demandez la procédure d'export complet par écrit avant de signer, pas le jour où vous voulez changer.

> **La panne la plus fréquente n'est pas celle de l'éditeur, c'est celle de votre ligne.** Un système en ligne s'arrête au routeur du cabinet, pas au centre de données. Un cabinet avec une seule fibre et sans secours 4G a un point unique de défaillance, même en ayant choisi le fournisseur le plus solide du marché.

## Ce que le cloud ne règle pas, et le serveur non plus

Une machine sous le comptoir de l'accueil n'est pas automatiquement plus confidentielle. Avec un système d'exploitation non mis à jour, un disque non chiffré et la sauvegarde sur un disque USB rangé dans la même pièce, elle vaut moins qu'un cloud entretenu : un cambriolage ou un incendie emporte l'original et la copie ensemble.

L'inverse est vrai aussi. Le cloud ne vous dispense de rien : il vous faut toujours le contrat de l'article 28, et il vous faut toujours savoir à quelle fréquence les restaurations sont testées.

- **Le chiffrement du disque**, dans les deux modèles. C'est ce qui transforme un portable ou un serveur volé en problème de matériel plutôt qu'en violation de données.
- **Une copie hors des murs**, toujours. La règle pratique est trois copies, sur deux supports différents, dont une en dehors du cabinet.
- **Une restauration testée** au moins une fois par an, chronomètre en main, avec le résultat noté.
- **Des accès nominatifs**, pas un mot de passe partagé sur un papier collé à l'écran, qui est la faille qui rend tout le reste inutile.

![Dossier patient dans Dentalpin avec odontogramme, alertes cliniques et plan de traitement en cours](/screenshots/dental-chart.png)

*Voilà ce qu'une restauration doit rendre intact, et pas seulement la liste des patients.*

## Choisissez le cloud si

- **Personne au cabinet ne veut être le référent technique.** C'est une bonne raison, et elle suffit à elle seule.
- **Vous travaillez sur plusieurs sites** et voulez le même agenda partout sans monter un VPN.
- **Votre connexion est solide et vous avez un secours** en données mobiles que vous avez réellement testé.
- **Vous préférez un coût mensuel prévisible** à un achat de matériel tous les cinq ou six ans.

## Choisissez un serveur au cabinet si

- **Une coupure de connexion ne peut pas arrêter les soins.** C'est l'argument le plus fort et le plus concret de ce côté.
- **Vous voulez pouvoir partir n'importe quel jour** sans dépendre de quelqu'un qui vous génère un export.
- **Vous avez déjà un prestataire informatique** ou quelqu'un qui entretient les postes sérieusement.
- **La localisation physique des données compte** pour vous, par politique interne ou parce qu'un tiers l'exige.

Si vous hésitez, il existe une voie intermédiaire honnête : commencez par l'option qui vous demande le moins de travail, et prenez chaque mois votre propre export complet. Vous gardez ainsi la possibilité de changer d'avis plus tard sans avoir rien parié d'irréversible.

Chez Dentalpin, ce choix n'oblige pas à changer de logiciel : le même produit tourne dans notre cloud ou sur votre serveur avec `docker compose`, sur la même base PostgreSQL et avec le même export. Pour essayer la version auto-hébergée avant de décider, [l'installation prend trois minutes](/fr/blog/installer-dentalpin-en-trois-minutes/), et les conditions des deux formules sont sur la page [tarifs](/fr/tarifs/).

## Sources

- Agence du Numérique en Santé, certification des hébergeurs de données de santé (article L.1111-8 du code de la santé publique). [esante.gouv.fr](https://esante.gouv.fr/produits-services/hds). Consulté le 9 août 2026.
- Règlement (UE) 2016/679 (RGPD), articles 28 et 32. [EUR-Lex](https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32016R0679). Consulté le 9 août 2026.

Ceci n'est pas un conseil juridique. Les durées de conservation et les obligations qui vous concernent dépendent de votre situation, et méritent d'être confirmées auprès de votre conseil ou de votre ordre.
