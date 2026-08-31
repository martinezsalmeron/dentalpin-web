---
title: "Évaluer un projet open source avant de lui confier votre cabinet dentaire"
description: "Cinq vérifications publiques pour savoir si un projet open source tiendra dix ans dans votre cabinet : maintenance, équipe, sécurité, licence et sortie."
pubDate: 2026-08-31
translationKey: evaluar-open-source-clinica
tags: [open-source, evaluation, securite, licences, contrats]
---

Regardez cinq choses, dans cet ordre : si le projet est maintenu, combien de personnes le maintiennent réellement, ce qui se passe le jour où quelqu'un trouve une faille de sécurité, ce que dit exactement la licence, et comment on en sort. Les cinq se vérifient depuis des pages publiques en un après-midi, et quatre d'entre elles reposent sur un standard publié : ce n'est donc pas vous qui fixez le seuil.

Le fait que le code soit public n'est pas la réponse. C'est ce qui vous permet de poser les questions, et presque personne ne les pose.

> **L'erreur habituelle consiste à évaluer le produit et non le projet.** Toutes les démonstrations sont convaincantes. Ce qui décide si, dans six ans, vous aurez encore un logiciel capable d'ouvrir vos dossiers cliniques, c'est qui le maintient, à quel rythme, et ce qui se passe quand une faille apparaît.

## Les cinq vérifications, et où elles se font

Aucune ne nécessite un rendez-vous commercial. Toutes sortent du dépôt public du projet et de deux services gratuits qui notent ce qu'ils y trouvent.

| Vérification | Ce que vous cherchez | Signal d'alerte |
|---|---|---|
| Maintenance | ✓ Des commits et des versions récents et réguliers | ✗ Des mois de silence et une version d'il y a deux ans |
| Équipe | ✓ Plusieurs personnes capables de publier | ✗ Une seule personne signe presque tout |
| Sécurité | ✓ Un fichier `SECURITY.md` avec un contact | ✗ Aucun endroit où signaler une faille |
| Licence | ✓ Le nom figure sur la liste de l'OSI | ✗ « Licence maison », sans texte publié |
| Sortie | ✓ Export documenté et base de données standard | ✗ Format propriétaire et non documenté |

## 1. « Maintenu » a une définition, et ce n'est pas la vôtre

L'OpenSSF publie Scorecard, un outil qui analyse un dépôt et note chaque aspect de 0 à 10. Son contrôle *Maintained* est le plus utile des dix-neuf, parce qu'il transforme une impression en seuil.

Pour la note maximale, il exige **au moins un commit par semaine pendant les 90 jours précédents**, et il n'évalue que les projets de plus de 90 jours. Voilà la barre, et elle est publiée.

Avec cela seul, vous pouvez ouvrir n'importe quel dépôt et voir de quel côté il tombe :

- **La date du dernier commit** vous dit si quelqu'un a touché au code ce mois-ci ou l'an dernier.
- **Le rythme des versions** compte plus que leur nombre. Douze versions en un an puis rien depuis quatorze mois, c'est un projet à l'arrêt, pas un projet stable.
- **Les tickets ouverts sans réponse** sont le signal le plus honnête de tous. Un projet en bonne santé n'a pas zéro ticket, il a des tickets auxquels on répond.

## 2. Combien de personnes le portent vraiment

Un projet avec mille étoiles et un seul auteur est un projet d'une personne. La communauté CHAOSS, au sein de la Linux Foundation, a une métrique pour exactement cela.

Elle s'appelle *Contributor Absence Factor*, autrefois *Bus Factor*, et elle répond à une question directe : « Quel est le risque pour le projet si les personnes les plus actives s'en vont ? » Elle se calcule comme le plus petit nombre de contributeurs qui totalisent 50 % des contributions.

Si ce nombre vaut un, la réponse est que le risque, c'est vous qui le portez.

> **Un facteur d'absence de un ne disqualifie pas un projet, mais il change le contrat dont vous avez besoin.** Si vous l'installez au cabinet, il vous faut soit une société derrière qui répond, soit un prestataire informatique qui a déjà lu ce code.

![Dossier patient avec les alertes cliniques, le plan de traitement actif et la chronologie filtrable par visites, traitements, encaissements et communications](/screenshots/patient-timeline.png)

*Des années de dossiers cliniques dans un logiciel. C'est cela qui dépend de la survie du projet dans six ans.*

## 3. Ce qui se passe le jour où quelqu'un trouve une faille

C'est la vérification que l'on saute le plus souvent, et la plus rapide à faire. Cherchez dans le dépôt un fichier `SECURITY.md` : c'est ce que traque le contrôle *Security-Policy* de Scorecard, et son absence signifie que celui qui trouve une faille n'a nulle part où la signaler.

L'OpenSSF Best Practices Badge chiffre la suite. Parmi ses critères de niveau *passing* : « le délai de première réponse du projet à tout signalement de vulnérabilité reçu au cours des 6 derniers mois DOIT être inférieur ou égal à 14 jours ». Il exige aussi que les notes de version identifient toute vulnérabilité connue corrigée qui disposait déjà d'un CVE.

Un projet qui affiche ce badge s'est engagé par écrit sur ces points. Un projet qui ne l'affiche pas les fait peut-être quand même, mais c'est à vous de le vérifier dans son historique de versions.

> **Ce n'est plus une bonne pratique, c'est du droit européen.** Le règlement (UE) 2024/2847, dit règlement sur la cyberrésilience, est entré en vigueur le 10 décembre 2024. Les obligations de signalement des vulnérabilités activement exploitées s'appliquent **à partir du 11 septembre 2026**, et l'essentiel du règlement à partir du 11 décembre 2027.

Ce règlement ne vous oblige pas en tant que cabinet : il oblige celui qui fabrique ou fournit le produit. Mais il crée une figure utile à connaître : celle des organisations qui soutiennent durablement un logiciel open source, que le texte anglais nomme *open-source software steward*. Son article 24 leur impose un point de contact unique pour recevoir les signalements de vulnérabilité ainsi qu'une politique de divulgation coordonnée.

Traduit dans votre évaluation : à partir de septembre 2026, un projet européen sérieux dispose d'une adresse où signaler une faille, parce que la loi l'exige. S'il n'en a pas, vous apprenez quelque chose sur lui. Ceci n'est pas un conseil juridique.

## 4. La licence, en deux minutes

L'Open Source Initiative maintient la définition de référence, avec dix critères numérotés, et publie la liste des licences approuvées sur `opensource.org/licenses`.

La vérification est littérale : cherchez le nom exact de la licence dans cette liste. GPL, AGPL, Apache 2.0 et MIT y figurent. Les licences dites *source available* n'y sont pas, ce qui ne les rend pas mauvaises, mais en fait une autre catégorie.

Ce que la licence décide et ce qu'elle ne décide pas mérite un article entier, et vous l'avez dans [logiciel libre ou propriétaire en santé](/fr/blog/logiciel-libre-sante/). Pour cette évaluation, une règle suffit : si le projet ne publie pas le texte de sa licence, vous n'avez pas fini de regarder, vous avez fini de l'évaluer.

## 5. Comment on en sort

Un projet open source dont vous ne pouvez pas partir pose le même problème qu'un projet propriétaire, avec des étapes en plus.

1. **Trouvez la documentation d'export** avant d'installer quoi que ce soit. Si elle existe, elle est dans le dépôt, pas dans un courriel commercial.
2. **Vérifiez le moteur de base de données.** PostgreSQL ou MySQL signifient que n'importe quel informaticien compétent peut lire vos données sans demander l'autorisation à personne.
3. **Prenez une copie dès le premier jour**, pas le jour où vous voulez partir. Un export que vous n'avez jamais testé n'est pas un export.
4. **Lisez ce que la copie emporte et ce qu'elle laisse.** Les radiographies et les documents joints vivent souvent en dehors de la base, et ce sont souvent eux qui manquent.

Le format à exiger est détaillé dans [exporter vos données](/fr/blog/exporter-donnees-logiciel-dentaire/).

## Le noter sans être informaticien

Les deux outils déjà cités sont publics et gratuits, et tous deux s'appliquent au projet de quelqu'un d'autre :

- **OpenSSF Scorecard** analyse le dépôt et renvoie dix-neuf contrôles notés de 0 à 10, dont *Maintained*, *Security-Policy*, *Code-Review*, *License* et *Vulnerabilities*, qui croise le code avec la base OSV des vulnérabilités connues.
- **L'OpenSSF Best Practices Badge** est une auto-évaluation publique du projet lui-même, organisée en six blocs : fondamentaux, gestion des modifications, signalement, qualité, sécurité et analyse.

Les deux mesurent du processus, précisément ce qu'une démonstration ne montre pas. Aucun ne mesure si le logiciel convient à un cabinet dentaire, et confondre les deux mène à installer un projet exemplaire dépourvu d'odontogramme.

## Deux semaines sur des données réelles, avant de décider

Aucune métrique ne remplace cela, et c'est le point le moins cher de la liste.

1. **Installez-le ailleurs qu'en production.** Un vieil ordinateur portable ou un serveur à cinq euros par mois suffisent pour savoir si le projet s'installe comme sa documentation l'annonce.
2. **Saisissez vingt patients réels**, avec leurs traitements et leurs devis. Vingt dossiers réels apprennent plus que deux cents inventés.
3. **Faites une journée complète en parallèle.** Rendez-vous, visite, note clinique, devis, encaissement. Si une étape du circuit manque, elle apparaît ici.
4. **Ouvrez un ticket avec une vraie question** et comptez les jours jusqu'à la réponse. C'est la seule façon de tester le point 3 sans attendre un vrai incident.
5. **Exportez tout, puis effacez.** Si la sortie fonctionne avec vingt patients, elle fonctionnera avec deux mille.

![Écran d'accueil avec les rendez-vous du jour, qui est présent au cabinet, les paiements en retard et la chronologie de la journée](/screenshots/home.png)

*L'écran dans lequel l'équipe travaille chaque matin. Deux semaines d'usage réel en disent ce qu'aucune note ne vous dira.*

## Ce qu'aucune de ces métriques ne vous dit

Il vaut mieux savoir où s'arrête cette méthode.

- **Si le projet correspond à votre façon de travailler.** Seul l'essai de deux semaines le dit.
- **Si le code est sûr.** Un code public est auditable, pas audité. Ce sont deux choses différentes et seule la seconde protège quelqu'un.
- **Qui répond au titre du RGPD.** C'est toujours vous, quel que soit le logiciel.
- **Si quelqu'un décroche un vendredi après-midi.** Cela dépend d'un contrat de support, et il en existe pour le libre comme pour le propriétaire.

Dentalpin fait partie des projets que l'on peut passer à cette liste : le code est public, la licence est la BSL 1.1, qui ne figure pas sur la liste de l'OSI et cela mérite d'être dit ainsi, la base de données est PostgreSQL et les [tarifs](/fr/tarifs/) sont publiés. Appliquez-lui les cinq vérifications avant de l'installer, comme à n'importe quel autre.

## Sources

- OpenSSF Scorecard, dépôt et documentation des contrôles, `github.com/ossf/scorecard` et `docs/checks.md` (consulté le 31 août 2026).
- OpenSSF Best Practices Badge, critères de niveau *passing*, `bestpractices.dev/en/criteria/0` (consulté le 31 août 2026).
- CHAOSS, métrique *Contributor Absence Factor*, `chaoss.community` (consulté le 31 août 2026).
- Open Source Initiative, *The Open Source Definition* et liste des licences approuvées, `opensource.org/osd` et `opensource.org/licenses` (consulté le 31 août 2026).
- Règlement (UE) 2024/2847 (règlement sur la cyberrésilience), texte sur EUR-Lex et page officielle de la Commission européenne sur son application, `digital-strategy.ec.europa.eu` (consulté le 31 août 2026).
