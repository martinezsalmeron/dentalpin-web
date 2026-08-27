---
title: "Rançongiciel au cabinet dentaire : le plan du petit cabinet"
description: "Que faire dans la première heure d'une attaque par rançongiciel au cabinet dentaire, quelle sauvegarde survit au chiffrement et ce que le RGPD impose sous 72 heures."
pubDate: 2026-08-27
translationKey: ransomware-clinica-dental
tags: [rancongiciel, securite, rgpd, sauvegardes, gestion-cabinet]
---

Le plan d'un petit cabinet face à un rançongiciel tient sur une feuille : une sauvegarde déconnectée que vous avez déjà restaurée au moins une fois, la liste des personnes à appeler dans la première heure, des mises à jour à jour avec double authentification sur tout accès distant, et la conscience qu'une violation de données déclenche un délai de 72 heures. Rien de tout cela ne s'improvise le matin où l'agenda refuse de s'ouvrir.

Voici cette feuille, dans l'ordre : ce qui s'arrête réellement, ce que vous faites dans les soixante premières minutes, ce que la réglementation exige, et les mesures qui changent vraiment les probabilités.

## Ce qui s'arrête, c'est le cabinet, pas l'ordinateur

Un rançongiciel chiffre les fichiers et réclame une rançon. Dans un cabinet dentaire, cela veut dire que l'agenda du jour ne s'ouvre plus, que le dossier clinique a disparu, que les radiographies ne s'affichent pas et que la facturation est à l'arrêt, en même temps et généralement en tout début de matinée.

Le problème clinique précède le problème informatique. Sans les alertes médicales d'un patient, vous ne savez pas à quel anesthésique il est allergique, et c'est la raison pour laquelle un cabinet privé de ses données ne peut pas continuer à recevoir comme si de rien n'était.

L'ENISA, l'agence européenne de cybersécurité, a publié en juillet 2023 sa première analyse des menaces du secteur de la santé. Les rançongiciels y représentent 54 % des menaces du secteur, les données de patients sont l'actif le plus visé avec 30 %, et seules 27 % des organisations interrogées disposaient d'un programme dédié de défense contre les rançongiciels.

> **Le chiffre qui justifie l'effort, c'est le nombre de patients prévus demain.** Un cabinet de trois fauteuils avec quarante rendez-vous par jour ne discute pas d'un sujet informatique, il décide s'il ouvre la semaine prochaine. Tout ce qui suit est bon marché à côté de cela.

![Agenda du cabinet en vue journalière avec les rendez-vous répartis par fauteuil](/screenshots/schedule-day.png)

*C'est l'écran qui cesse de s'ouvrir, et c'est le premier que quelqu'un remarque.*

## La première heure, dans l'ordre

L'ordre compte, parce que les décisions des premières minutes déterminent si vous conservez vos preuves et si la sauvegarde survit.

1. **Débranchez du réseau le poste touché**, câble et Wi-Fi. Cela empêche le chiffrement de progresser vers le serveur et les autres postes.
2. **Débranchez aussi le disque ou le NAS de sauvegarde.** S'il était connecté, c'est une cible et non un refuge.
3. **N'effacez rien tout de suite.** Faites d'abord une image du disque touché : c'est elle qui permettra une tentative de déchiffrement plus tard, et c'est aussi la preuve.
4. **Notez l'heure exacte de la découverte.** Le délai de notification court à compter du moment où le cabinet a connaissance de la violation, donc cette heure est un élément juridique.
5. **Appelez.** Votre prestataire informatique, puis la plateforme gouvernementale [cybermalveillance.gouv.fr](https://www.cybermalveillance.gouv.fr/), qui oriente les victimes et référence des prestataires de proximité.
6. **Décidez de ce que dit le secrétariat.** Les patients qui appellent pour confirmer leur rendez-vous vont poser la question, et une phrase convenue vaut mieux que cinq réponses improvisées.
7. **Déposez plainte.** L'attaque est une infraction, et le dépôt de plainte fait partie du dossier que vous devrez pouvoir présenter.

## Les 72 heures qui commencent à courir

L'article 33 du RGPD impose au responsable de traitement de notifier la violation à l'autorité de contrôle dans les meilleurs délais et, si possible, au plus tard 72 heures après en avoir pris connaissance, sauf si la violation n'est pas susceptible d'engendrer un risque pour les droits et libertés des personnes.

La CNIL précise la mécanique : la notification doit être transmise "dans les meilleurs délais à la suite de la constatation d'une violation", elle peut se faire en deux temps avec une notification complémentaire, et tout dépassement des 72 heures doit être motivé. Sur l'information des patients, elle est directe : "En cas de doute, notifiez à la CNIL qui vous indiquera s'il est nécessaire d'informer les personnes."

> **Documentez la violation même si vous ne la notifiez pas.** Le registre des violations est une obligation à part entière : nature de la violation, nombre approximatif de personnes concernées, conséquences probables et mesures prises. C'est exactement ce qu'un contrôle demande à voir.

| Ce qui s'est passé | Notifier la CNIL ? | Informer les patients ? |
|---|---|---|
| Chiffrement seul, restauration en quelques heures depuis une sauvegarde saine | ~ À évaluer et à documenter | ✗ En général non, sans risque élevé |
| Dossiers cliniques chiffrés, aucune sauvegarde exploitable | ✓ Oui | ✓ Probablement oui |
| Les attaquants publient ou menacent de publier les données | ✓ Oui | ✓ Oui |
| Un portable chiffré ne contenant aucune donnée de patient | ✗ Pas une violation de données | ✗ Non |

Ceci n'est pas un conseil juridique et chaque situation s'apprécie séparément. La règle pratique reste celle que la CNIL publie elle-même : dans le doute, on notifie.

## La sauvegarde qui survit au chiffrement

Un rançongiciel chiffre tout ce que la machine infectée peut écrire. Cela inclut le disque USB branché depuis deux ans et le dossier du NAS monté en lecteur réseau.

Le NCSC britannique le formule sans ambiguïté : conserver des sauvegardes hors ligne, séparées et dans un autre lieu, idéalement hors du cabinet ; ne pas laisser les supports de sauvegarde connectés en permanence au réseau, car "les attaquants ciblent les dispositifs de sauvegarde connectés" ; tester régulièrement la restauration ; et analyser les sauvegardes avant de restaurer.

| Où se trouve la sauvegarde | Survit à un rançongiciel | Charge mensuelle |
|---|---|---|
| Un dossier sur le même serveur | ✗ Chiffré avec le reste | ✓ Aucune |
| Disque USB branché en permanence | ✗ Chiffré avec le reste | ✓ Aucune |
| Disque branché, copié, puis retiré | ✓ Oui, s'il était débranché pendant l'attaque | ~ Quelqu'un doit y penser |
| Sauvegarde en ligne versionnée ou immuable | ✓ Oui, si l'attaquant n'a pas ces identifiants | ✓ Aucune une fois automatisée |
| Dossier synchronisé (Drive, OneDrive, Dropbox) | ✗ Synchronise les fichiers déjà chiffrés | ✓ Aucune |

Puis l'étape qui transforme une sauvegarde en plan : la restaurer une fois par an sur une autre machine et chronométrer. Ce chiffre est votre temps réel de reprise, et l'article 32.1.d du RGPD demande précisément de tester et d'évaluer régulièrement l'efficacité des mesures.

![Dossier patient avec le schéma dentaire, les alertes cliniques et le plan de traitement en cours](/screenshots/dental-chart.png)

*Les alertes médicales du dossier sont la partie qu'aucune équipe ne reconstitue de mémoire en une matinée.*

## Ce qui fait vraiment baisser le risque

Aucune mesure isolée n'empêche un rançongiciel, mais quelques-unes ferment les voies d'entrée habituelles dans un cabinet.

- **Mettez à jour dès la publication du correctif**, en priorité sur tout ce qui est exposé à internet : box, pare-feu, boîtier VPN.
- **Double authentification sur chaque accès distant.** Si quelqu'un travaille depuis chez lui, cette porte a besoin d'un second facteur, et il ne doit pas être installé sur l'appareil qui administre les sauvegardes.
- **Des comptes avec les droits strictement nécessaires.** Le secrétariat n'a pas besoin d'être administrateur du serveur, et un rançongiciel hérite exactement des droits de qui l'a ouvert.
- **Macros désactivées** dans les documents bureautiques, toujours une entrée courante par courriel.
- **Aucun identifiant partagé.** Un compte par personne n'est pas de la paperasse, c'est la seule chose qui permet de comprendre ensuite par où c'est entré.
- **Bureau à distance fermé sur internet.** Si l'accès externe est nécessaire, il passe par un VPN avec MFA, pas par un port ouvert.

## Payer, et pourquoi la réponse officielle est non

Le NCSC rappelle que les forces de l'ordre "n'encouragent, ne cautionnent ni n'approuvent le paiement des rançons", pour trois raisons qu'il énonce : rien ne garantit que vous récupérerez l'accès aux données, la machine reste infectée, et l'argent va à des groupes criminels. L'ANSSI et le ministère de la Justice ont publié sur le sujet un guide dédié, *Attaques par rançongiciels, tous concernés*, en accès libre.

> **Payer ne clôt pas le dossier.** Même si les fichiers reviennent, la violation a eu lieu, le délai de l'article 33 a couru, et l'obligation de la documenter puis d'évaluer l'information des patients reste la vôtre.

Avant de considérer des données comme perdues, vérifiez sur No More Ransom, le projet soutenu par Europol qui publie des outils de déchiffrement gratuits pour les familles déjà cassées. Il ne couvre pas tout, et la vérification prend cinq minutes.

## La feuille à écrire aujourd'hui

Écrivez-la, imprimez-la, et gardez-en une copie hors du système qu'il faudrait restaurer. Un plan qui n'existe que sur le serveur chiffré n'est pas un plan.

1. **Qui on appelle**, avec noms et numéros : prestataire informatique, responsable du cabinet, plateforme d'assistance, assureur si vous avez une couverture cyber.
2. **Où sont les sauvegardes**, avec quels identifiants on y accède, et qui les détient en dehors de l'informaticien.
3. **Comment on restaure**, étape par étape, rédigé par quelqu'un qui l'a fait au moins une fois.
4. **Ce que le secrétariat répond au patient qui appelle**, en deux phrases convenues.
5. **Qui décide de la notification** à la CNIL, et avec quel conseil ou DPO.
6. **La date du dernier test de restauration** et sa durée.

Avec cela, un rançongiciel cesse d'être une crise sans horizon pour devenir une très mauvaise journée dont on connaît la fin.

Chez Dentalpin, la sauvegarde est un export PostgreSQL standard accompagné du dossier des pièces jointes : vous pouvez l'envoyer vers une destination que le serveur du cabinet ne contrôle pas et la restaurer sans dépendre de personne. Les conditions des versions hébergée et auto-hébergée sont sur la page [tarifs](/fr/tarifs/).

## Sources

- Règlement (UE) 2016/679 (RGPD), articles 32, 33 et 34. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consulté le 27 août 2026.
- CNIL, *Notifier une violation de données personnelles*. [cnil.fr](https://www.cnil.fr/fr/notifier-une-violation-de-donnees-personnelles). Consulté le 27 août 2026.
- ANSSI et ministère de la Justice, *Attaques par rançongiciels, tous concernés*. [messervices.cyber.gouv.fr](https://messervices.cyber.gouv.fr/guides/attaques-par-rancongiciels-tous-concernes). Consulté le 27 août 2026.
- NCSC, *Mitigating malware and ransomware attacks*. [ncsc.gov.uk](https://www.ncsc.gov.uk/guidance/mitigating-malware-and-ransomware-attacks). Consulté le 27 août 2026.
- ENISA, *Health Threat Landscape* (5 juillet 2023). [enisa.europa.eu](https://www.enisa.europa.eu/news/checking-up-on-health-ransomware-accounts-for-54-of-cybersecurity-threats). Consulté le 27 août 2026.
- No More Ransom, *About the project*. [nomoreransom.org](https://www.nomoreransom.org/en/about-the-project.html). Consulté le 27 août 2026.

Ceci n'est pas un conseil juridique. L'appréciation du risque d'une violation et la décision de la notifier dépendent de votre situation, et méritent d'être confirmées avec votre conseil ou votre DPO.
