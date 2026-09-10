---
title: "Quel matériel informatique faut-il vraiment au cabinet dentaire ?"
description: "Combien de postes à l'accueil et au fauteuil, ce que Windows 11 exige aujourd'hui, quand le renouvellement devient inévitable et ce qu'il ne faut pas acheter."
pubDate: 2026-09-10
translationKey: hardware-clinica-dental
tags: [materiel, postes-de-travail, windows, infrastructure, fauteuil]
---

Un cabinet de deux ou trois fauteuils a besoin de moins de machines, et de machines moins chères, que ce que prévoient la plupart des devis : un poste à l'accueil, un par fauteuil, et guère plus. Ce qui fixe la dépense n'est pas la taille du cabinet, c'est une seule question : votre logiciel dentaire est-il un programme Windows installé, ou fonctionne-t-il dans le navigateur ?

Avec un logiciel installé, chaque poste doit faire tourner le programme et il y a presque toujours un serveur derrière. Dans le navigateur, n'importe quelle machine qui ouvre Chrome ou Firefox sans peiner convient, et le travail se fait sur le serveur, où qu'il se trouve.

## La question qui détermine le budget

Avant de regarder le moindre modèle, déterminez dans lequel des deux mondes vous êtes. Cela change le nombre de postes, leur puissance et le coût de maintenance.

- **Logiciel installé.** Le programme est installé sur chaque poste et les données vivent sur un serveur au cabinet. Il vous faut ce serveur, un câblage qui l'atteint, des sauvegardes locales et quelqu'un pour l'entretenir. L'éditeur publie les prérequis, et on les demande par écrit avant d'acheter quoi que ce soit.
- **Logiciel en navigateur.** Le poste n'a qu'à ouvrir un onglet. Un portable de milieu de gamme d'il y a quatre ans suffit, et ce qui mérite attention, c'est la connexion et l'écran, pas le processeur.
- **Le cas mixte.** La gestion tourne dans le navigateur et l'imagerie (radiologie, caméra ou scanner intraoral) reste un programme Windows. C'est la situation la plus fréquente, et elle signifie que le poste du fauteuil est dimensionné par le logiciel d'imagerie, pas par le logiciel de gestion.

> **Exigez les prérequis par écrit avant de signer.** Un éditeur qui ne publie ni n'envoie les configurations minimales de son propre produit laisse la facture de matériel arriver après le contrat, quand il n'y a plus rien à négocier.

## Les minimums de Windows 11, et ce qu'il faut acheter en réalité

Microsoft publie la configuration minimale de Windows 11, et elle est basse. Elle sert à ce que le système démarre, pas à ce qu'un accueil travaille avec quinze onglets ouverts et une radio en cours de chargement.

| Composant | Minimum publié par Microsoft | Ce qu'il faut acheter |
|---|---|---|
| Processeur | 1 GHz, 2 cœurs ou plus, 64 bits | 4 cœurs ou plus, des cinq dernières années |
| Mémoire | 4 Go | 16 Go, avec 8 Go comme plancher absolu |
| Stockage | 64 Go | SSD de 256 Go ou plus, jamais un disque mécanique |
| Micrologiciel | UEFI, compatible Secure Boot | Idem, vérifié avant l'achat |
| TPM | Version 2.0 | Version 2.0, activée d'usine |
| Graphismes | DirectX 12 avec pilote WDDM 2.0 | Le circuit intégré au processeur suffit |
| Écran | 720p de plus de 9 pouces | 24 pouces et 1080p à l'accueil |

Les deux chiffres qui changent le quotidien sont la mémoire et le disque. Une machine avec 8 Go et un SSD travaille mieux qu'une machine avec 16 Go et un disque mécanique, et le passage au SSD est le seul achat que tout le monde remarque dès le premier matin.

![Agenda de la journée sur un écran d'accueil, une colonne par fauteuil et les créneaux libres visibles](/screenshots/schedule-day.png)

*La vue du jour avec une colonne par fauteuil : l'écran que l'accueil garde ouvert dès l'ouverture du cabinet.*

## Où l'argent se voit et où il ne se voit pas

Les composants ne se remarquent pas tous de la même façon depuis le comptoir. C'est la section qui économise le plus de budget.

| Où dépenser | Visible au cabinet ? | Pourquoi |
|---|---|---|
| SSD à la place d'un disque mécanique | ✓ Tous les jours | Démarrage, ouverture des dossiers, recherches |
| Mémoire de 8 à 16 Go | ✓ À l'accueil | Beaucoup d'onglets et l'imagerie en même temps |
| Grand écran à l'accueil | ✓ Tous les jours | Un agenda multi-fauteuils sans faire défiler |
| Réseau filaire au fauteuil | ✓ Avec de l'imagerie lourde | Une radio sur un wifi saturé fait attendre |
| Deuxième écran à l'accueil | ~ Selon le flux | Utile quand facturation et accueil se chevauchent |
| Processeur haut de gamme | ✗ Presque jamais | Le goulot d'étranglement, c'est le disque et le réseau |
| Carte graphique dédiée | ✗ Presque jamais | Sauf exigence écrite du logiciel d'imagerie |
| Machine « santé » avec surcoût | ✗ Non | Aucune certification ne justifie le prix à elle seule |

La ligne du wifi évite le plus de discussions. Un fauteuil qui envoie des images lourdes passe par câble chaque fois que c'est possible, et quand ce n'est pas possible, la borne se pose dans le couloir du fauteuil, pas dans le bureau du fond.

## La date qui décide du renouvellement

Windows 10 a cessé d'être pris en charge le 14 octobre 2025. Depuis, Microsoft ne publie plus de mises à jour de sécurité ni de correctifs pour ces machines, sauf inscription au programme de mises à jour de sécurité étendues.

> **L'extension grand public court jusqu'au 12 octobre 2027**, et l'inscription reste ouverte jusqu'à cette même date (consulté le 10 septembre 2026). C'est une échéance, pas une alternative au renouvellement : elle n'apporte que des correctifs de sécurité critiques, sans support technique ni amélioration.

Pour un cabinet, cela transforme le renouvellement en calendrier plutôt qu'en urgence. Une machine qui ne peut pas passer à Windows 11 faute de TPM 2.0 ou de Secure Boot a une date de remplacement connue, et la dépense se répartit sur deux exercices au lieu de changer cinq postes le même mois.

## Famille ou Pro : la différence qui compte avec des données de patients

En magasin, ce sont deux étiquettes sur le même ordinateur. Pour un cabinet, non, et la différence s'appelle chiffrement du disque.

> **BitLocker ne s'active pas sur Windows Famille.** Microsoft le liste comme disponible sur Pro, Enterprise, Pro Education et Education. Un portable d'accueil non chiffré qui disparaît un vendredi est une violation de données de santé ; chiffré, c'est une machine à remplacer.

Deux nuances à connaître avant d'en discuter avec le fournisseur :

- **Le chiffrement de l'appareil existe bien sur toutes les éditions**, mais il ne s'active automatiquement que sur les machines qui remplissent certaines conditions, et depuis Windows 11 version 24H2 ces conditions ont été assouplies, donc davantage de machines y ont droit.
- **BitLocker avec vérification d'intégrité au démarrage exige un TPM 1.2 ou ultérieur.** Sans TPM, le chiffrement reste possible, mais la machine démarre avec une clé sur une clé USB, qui finit scotchée au poste de l'accueil et ne protège plus rien.

Demandez l'édition Pro sur le devis. Passer de Famille à Pro après coup est possible, mais cela se facture à part et tombe toujours la pire semaine.

## Accueil, fauteuil et bureau ne demandent pas la même machine

Un modèle unique pour tout le cabinet est facile à acheter et pénible à utiliser. Trois profils couvrent n'importe quel cabinet.

1. **Accueil.** Le poste qui travaille le plus d'heures et ouvre le plus de fenêtres. Grand écran, 16 Go, SSD et un clavier sur lequel on peut vraiment taper. C'est là que l'économie se paie en attente devant le patient.
2. **Fauteuil.** Dimensionné par le logiciel d'imagerie s'il y en a un. Sans imagerie, une machine modeste ou une tablette avec clavier suffit. Ce qu'il faut en revanche, c'est pouvoir la désinfecter : surface lisse, pas de grilles vers le haut, et un support qui l'éloigne de la zone de projection.
3. **Bureau ou direction.** Un portable, pour regarder les chiffres hors du cabinet sans emporter une copie de la base sur une clé USB.

![Dossier patient ouvert sur l'odontogramme, avec les alertes cliniques et le plan de traitement en cours](/screenshots/dental-chart.png)

*Le dossier patient tel qu'il apparaît pendant la consultation : odontogramme, alertes et plan en cours sur le même écran.*

## Le serveur, seulement s'il est vraiment nécessaire

Un serveur au cabinet se justifie dans deux cas : quand le logiciel de gestion installé l'exige, ou quand vous avez choisi d'héberger vous-même un logiciel web pour que les données ne quittent pas les locaux.

Dans les deux cas, ce qu'il faut est moins spectaculaire que ce qui se vend :

- **Une machine dédiée, pas celle de l'accueil.** Partager le serveur avec un poste de travail signifie qu'un redémarrage en milieu de matinée arrête tout le cabinet.
- **Un SSD et une copie qui sort du bâtiment.** Le serveur n'est pas la sauvegarde. C'est précisément la machine qui tombe en panne.
- **Un onduleur.** Une coupure au milieu d'une écriture est le moyen le plus rapide de corrompre une base de données, et un onduleur coûte moins qu'un après-midi de récupération.
- **Quelqu'un à appeler.** Par écrit, avec des horaires et un délai d'intervention. Un serveur sans contrat de maintenance est un serveur sans maintenance.

## Avant d'acheter, dans cet ordre

1. **Demandez à l'éditeur ses configurations minimale et recommandée**, par écrit, logiciel d'imagerie compris.
2. **Inventoriez l'existant** : processeur, mémoire, disque, édition de Windows et compatibilité Windows 11.
3. **Séparez ce qui se met à niveau de ce qui se remplace.** Beaucoup de postes n'ont besoin que d'un SSD et de mémoire, ce qui est un après-midi, pas un investissement.
4. **Choisissez l'édition**, Pro partout où passent des données de patients.
5. **Regardez le réseau avant les machines.** Si le fauteuil est en wifi et que l'imagerie rame, aucun ordinateur neuf n'y changera rien.
6. **Achetez par profil**, pas un modèle unique pour tous les postes.
7. **Rangez factures et numéros de série avec l'inventaire.** Le jour de l'incident, cette liste vaut plus que la machine.

## Ce qu'il ne faut pas acheter

Quatre lignes apparaissent dans presque tous les devis et ne se justifient presque jamais dans un cabinet : la carte graphique dédiée sans exigence écrite qui la réclame, le processeur haut de gamme pour ouvrir un navigateur, la machine facturée plus cher parce qu'elle est vendue « pour la santé », et le serveur acheté au cas où avant de savoir si le logiciel en a besoin.

La cinquième coûte plus cher que les quatre autres réunies : renouveler tous les postes en même temps parce que personne n'a regardé l'inventaire avant qu'une machine refuse de démarrer.

Si le logiciel de gestion fonctionne dans le navigateur, les prérequis d'un poste sont ceux du navigateur et pas beaucoup plus. Dentalpin est de ce type : il s'utilise depuis Chrome ou Firefox sur n'importe quelle machine raisonnable, et il s'héberge au cabinet ou à l'extérieur, donc la décision du serveur vous appartient au lieu d'être imposée par la licence. Les formules sont sur la page [tarifs](/fr/tarifs/).

Ceci n'est pas un conseil technique pour votre installation précise. Les prérequis de votre logiciel d'imagerie l'emportent sur toute recommandation générale de cet article.

## Sources

- Microsoft, configuration requise pour Windows 11 : <https://www.microsoft.com/en-us/windows/windows-11-specifications> (consulté le 10 septembre 2026).
- Microsoft, fin de la prise en charge de Windows 10 le 14 octobre 2025 : <https://support.microsoft.com/en-us/windows/deployment/updates-lifecycle/windows-10-support-has-ended-on-october-14-2025> (consulté le 10 septembre 2026).
- Microsoft, programme de mises à jour de sécurité étendues de Windows 10 : <https://www.microsoft.com/en-us/windows/extended-security-updates> (consulté le 10 septembre 2026).
- Microsoft, BitLocker : éditions prises en charge et configuration requise : <https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/> (consulté le 10 septembre 2026).
