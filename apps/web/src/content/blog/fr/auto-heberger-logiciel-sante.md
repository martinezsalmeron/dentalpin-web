---
title: "Auto-héberger un logiciel de santé : ce que personne ne vous dit"
description: "L'auto-hébergement ne coûte pas de licence, il coûte de l'exploitation : une restauration testée, le certificat, la version majeure de PostgreSQL et quelqu'un de joignable."
pubDate: 2026-08-19
translationKey: autoalojar-software-sanitario
tags: [auto-heberge, docker, postgresql, securite, rgpd]
---

Auto-héberger un logiciel de santé n'est pas gratuit : c'est la licence qui est gratuite. Ce que vous prenez en charge, ce sont quatre tâches qui ne finissent jamais : une sauvegarde que vous avez réellement restaurée, un certificat qui se renouvelle tout seul jusqu'au jour où il ne se renouvelle plus, une montée de version majeure de PostgreSQL tous les quelques années, et une personne joignable le lundi à huit heures. Si ces quatre tâches ont un propriétaire, l'auto-hébergement est un bon choix, et un choix économique. Sinon, votre serveur est un éditeur de logiciel avec un seul salarié et sans astreinte.

Ce qui suit est ce que le tutoriel d'installation ne dit pas, avec la source technique ou juridique de chaque point.

## Installer prend une journée, exploiter prend cinq ans

L'installation est devenue vraiment simple. Trois fichiers, un `docker compose up`, et quelques minutes plus tard une application tourne avec son certificat. Cette partie n'est plus le problème, et c'est précisément ce qui trompe.

Le problème, c'est tout ce qui vient après, et cela n'a pas de date de fin : les correctifs du système, l'espace disque, les alertes que personne ne lit, la migration de la base dans trois ans, et la nuit où le serveur ne redémarre pas.

> **L'installation est un évènement, l'exploitation est un engagement.** Personne n'abandonne un serveur le premier jour. On l'abandonne au quatorzième mois, quand la personne qui l'a monté a changé de poste et que les courriels d'erreur partent toujours vers son ancienne adresse.

![Schéma d'une installation auto-hébergée : le navigateur atteint Caddy en HTTPS, qui envoie /api/* vers le backend et le reste vers le frontend Nuxt ; le backend dialogue avec PostgreSQL](/diagrams/install-stack.svg)

*Quatre processus et une base de données. Chaque case de ce schéma est quelque chose que quelqu'un doit tenir à jour.*

## Ce que la loi vous demande toujours, où que soit le serveur

L'auto-hébergement n'ajoute aucune obligation juridique. Il retire simplement la personne qui en remplissait une partie à votre place.

Le cabinet est responsable du traitement des données de ses patients, que le serveur soit dans le placard de l'accueil ou dans le centre de données d'un tiers. L'article 32 du RGPD cite, parmi les mesures techniques et organisationnelles, deux points qui se lisent comme une liste de tâches d'administration système :

- **Article 32.1.c** : "des moyens permettant de rétablir la disponibilité des données à caractère personnel et l'accès à celles-ci dans des délais appropriés en cas d'incident physique ou technique".
- **Article 32.1.d** : "une procédure visant à tester, à analyser et à évaluer régulièrement l'efficacité des mesures techniques et organisationnelles pour assurer la sécurité du traitement". Le test régulier n'est pas une bonne pratique facultative, il est dans le texte.

S'y ajoute l'article 33.1 : en cas de violation, le responsable du traitement la notifie à l'autorité de contrôle "dans les meilleurs délais et, si possible, 72 heures au plus tard après en avoir pris connaissance".

> **Les soixante-douze heures courent à partir du moment où vous savez, pas du moment où vous comprenez.** Si le serveur est le vôtre, personne ne vous appellera pour vous dire qu'il s'est passé quelque chose. Cette alerte aussi, c'est à vous de la construire.

Ceci n'est pas un conseil juridique. L'application concrète à votre cabinet mérite d'être confirmée auprès de votre conseil ou de votre ordre professionnel.

## Les données ne sont pas dans le conteneur

C'est le malentendu le plus coûteux des premiers mois. La documentation de Docker le dit sans détour : "A volume's contents exist outside the lifecycle of a given container. When a container is destroyed, the writable layer is destroyed with it."

En pratique : vous pouvez détruire et recréer les conteneurs autant de fois que vous voulez, mais ce qu'il faut sauvegarder, ce sont les volumes. Et une installation de santé en compte au moins deux.

- **La base de données**, avec les patients, l'agenda, le dossier clinique, les devis et la facturation.
- **Les fichiers déposés**, c'est-à-dire les radiographies, les photographies cliniques et les PDF signés. Ils pèsent en général bien plus lourd que la base, et ce sont eux que l'on oublie.

Un export de la base sans le dossier des fichiers restaure un cabinet sans aucune image. Techniquement c'est une sauvegarde ; en pratique c'est la moitié d'une sauvegarde.

**Et on ne copie pas à chaud avec un simple `cp`.** La documentation de PostgreSQL est catégorique sur la copie du répertoire de données pendant que le serveur tourne : "The database server *must* be shut down in order to get a usable backup. Half-way measures such as disallowing all connections will *not* work". Ce qui fonctionne serveur allumé, c'est `pg_dump`, dont les exports sont "internally consistent, meaning, the dump represents a snapshot of the database at the time pg_dump began running".

La CNIL résume les précautions élémentaires en quatre lignes : effectuer des sauvegardes fréquentes, "stocker au moins une sauvegarde sur un site géographiquement distinct du site d'exploitation", "isoler au moins une sauvegarde hors ligne, déconnectée du réseau de l'entreprise" et "tester régulièrement l'intégrité des sauvegardes et la capacité de les restaurer".

Cette dernière ligne décide de tout, et elle a son propre guide : [quoi sauvegarder et à quelle fréquence](/fr/blog/sauvegardes-cabinet-dentaire/).

## Le certificat se renouvelle seul jusqu'à ce que quelqu'un ferme le port 80

Les certificats Let's Encrypt "are valid for 90 days", et l'autorité recommande elle-même "renewing 90 day certificates every 60 days". Le client ACME s'en charge sans qu'on le lui demande, si bien que le sujet sort de la tête de tout le monde.

Jusqu'à la panne, et elle se produit d'une manière très précise. Le défi HTTP-01 "can only be done on port 80. Allowing clients to specify arbitrary ports would make the challenge less secure, and so it is not allowed by the ACME standard."

Autrement dit, si quelqu'un ferme le port 80 sur le pare-feu parce que "de toute façon tout passe en HTTPS", le renouvellement cesse de fonctionner en silence. Le site reste parfait pendant trente jours, puis un mardi ordinaire, le navigateur de l'accueil affiche un avertissement de sécurité en plein écran.

1. **Laissez le port 80 ouvert** même s'il ne fait que rediriger vers HTTPS, ou passez au défi DNS-01, qui valide par un enregistrement TXT sur `_acme-challenge.votre-domaine` et exige un hébergeur DNS avec une API.
2. **Surveillez la date d'expiration depuis l'extérieur** du serveur, avec n'importe quelle sonde externe. Une alerte qui vit sur la machine tombée n'alerte personne.
3. **Vérifiez au 65e jour** que le renouvellement a bien eu lieu, pas que la tâche s'est lancée.
4. **Notez qui reçoit l'alerte** et confirmez que cette adresse existe encore le jour où cette personne s'en va.

## La mise à jour qui fait mal

Les correctifs mineurs sont une routine. PostgreSQL garantit que "minor releases never change the internal storage format and are always compatible with earlier and later minor releases of the same major version number". Passer de 17.4 à 17.6, c'est redémarrer un conteneur.

La version majeure est autre chose : "For *major* releases of PostgreSQL, the internal data storage format is subject to change, thus complicating upgrades." Un conteneur PostgreSQL 17 ne démarrera pas sur un répertoire de données écrit par la 16. Si votre image est figée sur `latest`, le jour où l'étiquette bouge, la base ne remonte pas, et le message d'erreur ne sera pas limpide à huit heures du matin.

Le projet documente trois chemins : exporter et restaurer avec `pg_dumpall`, utiliser `pg_upgrade`, plus rapide, ou passer par la réplication. Choisir prend une demi-heure de lecture. Le découvrir pendant une panne coûte une journée.

1. **Figez la version majeure** dans la configuration, jamais `latest`, ni pour l'application ni pour la base.
2. **Regardez le calendrier de support** de votre version une fois par an et planifiez le saut avant la fin des correctifs de sécurité.
3. **Faites la migration sur une copie**, sur une autre machine, et chronométrez-la.
4. **Conservez l'export précédent** jusqu'à ce que le cabinet ait travaillé une semaine entière sur la nouvelle version.

## Qui répond le lundi à huit heures

C'est la question qui tranche, et elle n'est pas technique.

Un cabinet dentaire ouvre à huit ou neuf heures avec l'agenda déjà plein. Si le serveur ne démarre pas, il n'y a plus de dossier clinique, plus de consentements et aucun moyen de savoir qui vient. La vraie question n'est pas de savoir si vous sauriez le réparer, mais si cette personne est disponible, avec un ordinateur portable, à ce moment-là.

![Écran d'accueil avec les rendez-vous du jour, qui est présent au cabinet, les paiements en retard et les patients récents](/screenshots/home.png)

*Voilà l'écran qui doit être debout à huit heures. Tout le reste peut attendre midi.*

Réponses honnêtes qui fonctionnent : le prestataire informatique du cabinet, sous contrat d'heures avec un numéro de téléphone ; le praticien lui-même, si le sujet lui plaît et qu'il l'assume ; ou un service infogéré. Réponses qui ne fonctionnent pas : le neveu, et "je regarderai ça".

## S'auto-héberger ou non : le tableau

| | Serveur à vous | Service infogéré |
|---|---|---|
| Licence | ✓ Sans abonnement si le logiciel est libre | ✗ Un abonnement tant que vous l'utilisez |
| Où vivent les données | ✓ Sur votre machine | ~ Là où le contrat le dit |
| Correctifs système | ✗ C'est vous qui les appliquez | ✓ C'est le prestataire |
| Sauvegardes | ✗ Vous les montez et les testez | ~ Il les fait, vous les testez quand même |
| Lundi à 8h00 | ✗ Dépend de qui est disponible | ✓ Dépend de son engagement de service |
| Version majeure de PostgreSQL | ✗ Vous la planifiez | ✓ Il la planifie |
| Si l'éditeur ferme | ✓ Cela continue de tourner | ✗ Dépend de l'export qu'on vous remet |
| Coût réel | ~ Serveur peu cher, heures chères | ~ Abonnement prévisible, heures d'un autre |

La colonne de droite ne vous décharge de rien juridiquement : vous restez responsable du traitement et vous devez toujours pouvoir démontrer que vous savez restaurer. Ce qu'elle achète, c'est que quelqu'un d'autre fasse le travail, et un numéro à appeler quand il ne l'a pas fait.

## Les trois questions à trancher avant de décider

1. **Qui est le propriétaire du serveur, avec un nom et un prénom ?** Pas la fonction, la personne. Si la réponse met plus de cinq secondes, il n'y a pas de propriétaire.
2. **Quand quelqu'un a-t-il fait une restauration complète pour de vrai ?** Si la réponse est "jamais", vous n'avez pas de sauvegardes, vous avez de gros fichiers.
3. **Que se passe-t-il le jour où cette personne part ?** Écrivez la procédure maintenant, rangez-la en dehors du système à restaurer, et faites-la relire par quelqu'un d'autre.

Si les trois ont une réponse, l'auto-hébergement est un excellent choix : contrôle total des données, aucun abonnement, et aucune dépendance à la survie d'une société. Si l'une reste en suspens, réglez-la d'abord et décidez ensuite.

Chez Dentalpin, l'installation auto-hébergée tient en quatre conteneurs et deux volumes, celui de la base et celui des fichiers déposés, si bien que la sauvegarde est un export PostgreSQL standard plus un dossier, automatisable avec les outils que vous utilisez déjà. Les conditions des versions auto-hébergée et hébergée sont sur [les tarifs](/fr/tarifs/), et si vous voulez répéter une restauration avant de vous engager, [l'installation prend trois minutes](/fr/blog/installer-dentalpin-en-trois-minutes/).

## Sources

- Règlement (UE) 2016/679 (RGPD), articles 32 et 33. Texte du [chapitre 4 publié par la CNIL](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4) et sur [legislation.gov.uk](https://www.legislation.gov.uk/eur/2016/679/article/32). Consultés le 19 août 2026.
- CNIL, *Sécurité : sauvegarder et prévoir la continuité d'activité*. [cnil.fr](https://www.cnil.fr/fr/securite-sauvegarder-et-prevoir-la-continuite-dactivite). Consulté le 19 août 2026.
- PostgreSQL, *SQL Dump*. [postgresql.org](https://www.postgresql.org/docs/current/backup-dump.html). Consulté le 19 août 2026.
- PostgreSQL, *File System Level Backup*. [postgresql.org](https://www.postgresql.org/docs/current/backup-file.html). Consulté le 19 août 2026.
- PostgreSQL, *Upgrading a PostgreSQL Cluster*. [postgresql.org](https://www.postgresql.org/docs/current/upgrading.html). Consulté le 19 août 2026.
- Let's Encrypt, *FAQ* et *Challenge Types*. [letsencrypt.org/docs/faq](https://letsencrypt.org/docs/faq/) et [letsencrypt.org/docs/challenge-types](https://letsencrypt.org/docs/challenge-types/). Consultés le 19 août 2026.
- Docker, *Volumes*. [docs.docker.com](https://docs.docker.com/engine/storage/volumes/). Consulté le 19 août 2026.
