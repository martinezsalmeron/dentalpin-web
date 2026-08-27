---
title: "Journal des accès au dossier patient : quoi tracer et comment le relire"
description: "Les champs qu'un journal des accès au dossier patient doit conserver, la durée de conservation recommandée et une relecture mensuelle en vingt minutes."
pubDate: 2026-08-27
translationKey: auditoria-accesos-historia-clinica
tags: [dossier-patient, securite, rgpd, tracabilite, cabinet-dentaire]
---

Un journal des accès au dossier patient doit conserver cinq informations à chaque ouverture de dossier : qui a ouvert, quand, quel patient, quelle action et depuis où. On le garde entre six mois et un an, on le protège pour que personne ne puisse modifier ses propres lignes, et on le relit à intervalles réguliers, parce qu'un journal que personne ne consulte ne détecte rien. Voilà l'ensemble du dispositif, et la suite explique pourquoi chaque pièce est là.

Ceci n'est pas un conseil juridique. Toutes les sources officielles sont en fin d'article, consultées le 27 août 2026.

## Une habilitation dit qui peut entrer, le journal dit qui est entré

Ce sont deux choses différentes, et le cabinet qui possède la première croit souvent posséder les deux. L'habilitation est une décision prise à l'avance : le secrétariat n'ouvre pas les dossiers cliniques. Le journal est un fait consigné après coup : mardi à 12h40, telle personne a ouvert le dossier de tel patient.

Seul le second répond à une question. Quand un patient demande qui a consulté son dossier, ou qu'il faut évaluer si une violation de données a touché des données de santé, la liste des habilitations ne dit rien ni sur l'un ni sur l'autre.

> **La curiosité est la forme d'accès indu la plus fréquente, et aucune habilitation ne l'attrape.** L'équipe soignante a un accès légitime aux dossiers. Ce qu'il faut pouvoir distinguer, c'est l'accès qui correspond à un rendez-vous du jour de celui qui ne correspond à rien.

## Les cinq champs de chaque ligne

La CNIL est précise sur ce point. Elle demande de tracer les "opérations de création, consultation, partage, modification et suppression", chaque trace portant l'identifiant de l'auteur, la date, l'heure, le type d'opération et la référence de la donnée concernée.

Transposé à un cabinet dentaire, cela donne la liste suivante.

| Champ | Ce qu'il conserve | Indispensable ? |
|---|---|---|
| Qui | Le compte nominatif de la personne | ✓ Oui |
| Quand | Date et heure | ✓ Oui |
| Quel patient | Identifiant du dossier ouvert | ✓ Oui |
| Quelle action | Consulter, créer, modifier, exporter ou supprimer | ✓ Oui |
| Depuis où | Adresse IP ou poste | ~ Si accès à distance |
| Ce qui a changé | Valeur avant et valeur après | ~ Sur les modifications |
| Pourquoi | Courte justification de l'accès | ✗ Accès en urgence uniquement |

Les quatre premiers ne se négocient pas, parce qu'en retirer un empêche la ligne de répondre à quoi que ce soit. Un journal sans patient dit que quelqu'un a regardé quelque chose. Un journal qui ne sépare pas la consultation de la suppression laisse tomber la distinction la plus utile.

Le cinquième dépend de vos usages. Si le logiciel ne s'ouvre que depuis les postes du cabinet, l'adresse IP apporte peu ; s'il y a un accès depuis le domicile, c'est le champ qui sépare une consultation ordinaire d'une consultation à trois heures du matin.

![Fiche patient sur l'onglet activité, avec les alertes cliniques, le plan de traitement en cours et une frise chronologique filtrable par visites, traitements et échanges](/screenshots/patient-timeline.png)

*L'activité enregistrée sur un patient, rassemblée dans une seule frise chronologique.*

## Ce que le RGPD exige, et ce que la CNIL précise

Le RGPD ne dit pas "journalisez", il dit deux choses qui y mènent. L'article 5.2 rend le responsable de traitement comptable de sa conformité et capable de la démontrer, et l'article 32 impose des mesures techniques appropriées pour la sécurité du traitement.

Démontrer qui a accédé à quoi, dans un cabinet, se fait avec un journal ou ne se fait pas. C'est pourquoi la CNIL en fait une mesure de sécurité de base plutôt qu'une option pour les grandes structures.

Elle ajoute deux exigences qu'on oublie souvent. Il faut protéger les traces contre les accès non autorisés, en veillant notamment à ce que le personnel ne puisse pas altérer l'enregistrement de sa propre activité. Et il faut vérifier régulièrement que les journaux restent exploitables, ce qui est une manière polie de dire qu'un journal illisible ne compte pas.

> **La CNIL demande aussi d'analyser les traces, pas seulement de les produire.** Une détection en temps réel ou à court terme est ce qui transforme un fichier de logs en dispositif de sécurité.

## Combien de temps les conserver

La CNIL publie une fourchette : conserver les traces "sur une période glissante comprise entre six mois et un an", avec des exceptions en cas d'obligation légale, de contentieux, de contrôle interne ou d'analyse après incident.

Le Garante italien, pour les journaux d'accès des administrateurs système, pose un plancher : ils doivent être conservés "per un congruo periodo, non inferiore a sei mesi", jamais moins de six mois.

Six mois est donc le seuil raisonnable. En dessous, une réclamation qui arrive au printemps sur un fait de l'automne ne trouve plus rien à examiner.

## Une relecture mensuelle en vingt minutes

Un journal qu'on n'ouvre qu'une fois le problème survenu arrive trop tard. La relecture périodique est ce qui en fait un outil de détection, et elle tient dans une routine courte.

1. **Filtrez les accès hors horaires.** Un dossier ouvert la nuit, un dimanche ou un jour férié mérite une explication, même s'il y en a presque toujours une.
2. **Croisez les accès du jour avec l'agenda.** Si quelqu'un a ouvert cinq dossiers pour trois patients, deux restent à expliquer.
3. **Cherchez les patients que tout le monde connaît.** Le dossier d'un proche d'un membre de l'équipe, d'un confrère ou d'une figure locale est celui qu'on ouvre le plus souvent sans motif.
4. **Vérifiez les comptes des personnes parties.** Un compte désactivé ne devrait plus produire aucune ligne, et s'il en produit le problème est sérieux.
5. **Relisez les exports.** Télécharger la base patients est une action distincte de la consulter, et elle devrait rester rare.
6. **Notez la date de la relecture et ce que vous avez trouvé**, même quand la réponse est "rien". Cette feuille est la preuve que le contrôle existe.

Une limite à énoncer clairement devant l'équipe : la CNIL interdit de détourner les données de journalisation vers des finalités sans rapport, comme le suivi du temps de travail. Les journaux servent à la sécurité. Les utiliser autrement détruit la confiance qui fait que personne ne cherche à les désactiver.

![Écran des rapports du cabinet avec les indicateurs de la période](/screenshots/reports.png)

*La relecture mensuelle fonctionne mieux en routine fixe, à côté des autres chiffres du mois.*

## Trois erreurs qui vident le journal de sa valeur

**Le compte partagé.** Si quatre personnes se connectent sous "secretariat", le journal enregistre fidèlement que "secretariat" a ouvert le dossier, ce qui n'identifie personne. C'est la faille qui annule tout le reste, et c'est la plus répandue.

**Le journal que l'administrateur peut modifier.** Si le praticien titulaire peut corriger ou supprimer des lignes, le journal ne prouve plus rien face à un tiers. Le Garante italien exige des journaux dotés de "caratteristiche di completezza, inalterabilità e possibilità di verifica della loro integrità", soit complétude, inaltérabilité et vérification possible de leur intégrité.

**Le compte supprimé.** Quand quelqu'un quitte le cabinet et que son compte est supprimé au lieu d'être désactivé, ses lignes de journal deviennent orphelines. Désactiver conserve la traçabilité, supprimer la détruit.

## Le patient peut demander, il faut pouvoir répondre

Deux pays européens ont déjà tranché, et ils indiquent la direction.

Le Portugal est le plus exigeant. L'article 29 de la Lei 58/2019 prévoit que "o titular dos dados deve ser notificado de qualquer acesso realizado aos seus dados pessoais", le patient doit être informé de tout accès à ses données, et cite parmi les mesures un registre électronique des accès et des données consultées.

L'Italie procède sur demande. Les lignes directrices du Garante sur le dossier sanitaire permettent au patient de demander formellement "conoscere gli accessi eseguiti sul proprio dossier", avec le service qui a consulté, la date et l'heure, le responsable disposant de quinze jours pour répondre.

En France, la demande d'accès arrive de toute façon. La différence entre un cabinet qui répond en dix minutes et un cabinet qui ne peut pas répondre tient à un seul détail : l'identifiant du patient est-il enregistré sur chaque ligne du journal.

## Ce que le logiciel peut faire, et ce qu'il ne peut pas

Aucun journal n'empêche de lire l'écran du voisin, et aucun ne remplace la conversation où l'on explique qu'on n'ouvre pas le dossier d'une connaissance par curiosité. Ce qu'il permet, c'est d'avoir cette conversation avec des faits plutôt qu'avec des soupçons.

Dans Dentalpin, chaque ouverture de dossier est enregistrée avec l'utilisateur, la date et le patient et les comptes se désactivent sans effacer ce qu'ils ont fait. Les conditions des versions hébergée et auto-hébergée sont sur la page [tarifs](/fr/tarifs/).

## Sources

- CNIL, *Sécurité: Tracer les accès et gérer les incidents* (mis à jour le 14 mars 2024). [cnil.fr](https://www.cnil.fr/fr/securite-tracer-les-acces-et-gerer-les-incidents). Consulté le 27 août 2026.
- Règlement (UE) 2016/679 (RGPD), articles 5.2 et 32. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consulté le 27 août 2026.
- Garante per la protezione dei dati personali, provvedimento du 27 novembre 2008 sur les administrateurs système. [garanteprivacy.it](https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/1577499). Consulté le 27 août 2026.
- Garante per la protezione dei dati personali, *Linee guida in materia di Dossier sanitario*, 4 juin 2015. [garanteprivacy.it](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/4084632). Consulté le 27 août 2026.
- Lei n.º 58/2019 du 8 août, article 29. [PGDL](https://www.pgdlisboa.pt/leis/lei_mostra_articulado.php?artigo_id=3118A0029&nid=3118&tabela=leis&pagina=1&ficha=1). Consulté le 27 août 2026.

Les durées de conservation applicables à votre cabinet dépendent de votre situation. Vérifiez-les avec votre conseil ou votre délégué à la protection des données.
