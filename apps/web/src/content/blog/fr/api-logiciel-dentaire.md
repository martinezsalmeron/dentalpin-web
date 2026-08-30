---
title: "L'API de votre logiciel dentaire : ce que vous devriez pouvoir faire de vos propres données"
description: "Ce qu'une API de logiciel dentaire doit permettre : lire, écrire, être alerté et partir. Les questions à poser avant de signer et comment la tester."
pubDate: 2026-08-30
translationKey: api-software-clinica-dental
tags: [api, integrations, contrats, export-de-donnees, rgpd]
---

Vous devriez pouvoir lire et écrire, depuis l'extérieur du logiciel, les quatre choses qui font tourner le cabinet : les patients, les rendez-vous, les devis et les factures. Avec vos identifiants, sans demander l'autorisation de personne et sans souscrire un module à part. C'est l'examen pratique, et très peu de logiciels dentaires le passent en entier.

La loi vous garantit nettement moins que cela, mais elle vous garantit quelque chose. Autant savoir quoi avant de vous asseoir pour négocier.

## Une API, c'est la deuxième porte du logiciel

L'écran est la porte par laquelle passent les personnes. L'API est la porte par laquelle passent les autres programmes, avec la même serrure et les mêmes droits.

Quand elle existe, le formulaire de prise de rendez-vous du site écrit directement dans l'agenda et plus personne ne ressaisit quoi que ce soit. Quand elle n'existe pas, chaque intégration devient quelqu'un qui recopie des données d'un écran vers un autre.

![Dossier d'un patient à l'écran avec ses coordonnées, ses informations de contact et ses données de facturation](/screenshots/patients.png)

*Le dossier d'un patient, avec les coordonnées, le contact et la facturation répartis en onglets.*

## Les quatre choses qu'une API doit vous permettre

- **Lire.** Sortir la liste des patients, les rendez-vous sur une plage de dates, les devis acceptés du trimestre. C'est ce qui alimente un tableau de bord ou un rapport.
- **Écrire.** Créer un rendez-vous, enregistrer un patient, marquer une facture comme réglée. Sans écriture, une intégration sert à regarder et pas à grand-chose d'autre.
- **Vous prévenir.** Un webhook, c'est le logiciel qui appelle votre système quand il se passe quelque chose, au lieu de votre système qui demande toutes les cinq minutes s'il s'est passé quelque chose.
- **Vous laisser partir.** Un téléchargement complet de tout, qui n'est pas l'API et ne la remplace pas.

> **Une API n'est ni une sauvegarde ni un export.** Elle déplace une donnée maintenant, elle ne reconstruira pas le cabinet le matin où le serveur ne démarre plus. Si l'API vous est présentée comme la réponse à « comment je récupère mes données », la moitié de la réponse manque.

## Ce que la loi garantit, et ce qu'elle ne garantit pas

Il y a ici une confusion qui coûte cher. Le droit à la portabilité du RGPD appartient au patient, pas au cabinet.

L'article 20.1 donne à la personne concernée le droit de recevoir les données à caractère personnel la concernant « dans un format structuré, couramment utilisé et lisible par machine » et de les transmettre à un autre responsable. L'article 20.2 ajoute le droit de les faire transmettre directement d'un responsable à un autre « lorsque cela est techniquement possible ». L'article 15.3 impose la remise d'une copie, sous une forme électronique d'usage courant lorsque la demande arrive par voie électronique.

Dans un cabinet dentaire, c'est en général vous le responsable de traitement et votre éditeur le sous-traitant. Le patient exerce donc ce droit contre le cabinet, et le cabinet a besoin d'un logiciel capable d'y répondre. Le RGPD ne vous donne pas, à lui seul, une API opposable à votre éditeur.

Ce qui commence à vous en donner une, c'est le règlement européen sur les données, le Data Act (règlement (UE) 2023/2854), applicable depuis le 12 septembre 2025 :

- **Des interfaces ouvertes et gratuites.** L'article 30.2 impose aux fournisseurs de services de traitement de données de mettre des interfaces ouvertes à disposition de tous leurs clients gratuitement, avec assez d'informations « pour permettre le développement de logiciels communiquant avec les services ».
- **Un export au moment de changer.** L'article 30.5 impose d'exporter, à la demande du client, toutes les données exportables dans un format structuré, couramment utilisé et lisible par machine.
- **Plus de frais de sortie à partir de 2027.** L'article 29.1 interdit tout frais de changement à compter du 12 janvier 2027. Jusque-là, seuls des frais réduits plafonnés au coût réel sont admis.

> **Ces obligations portent sur le changement de fournisseur, pas sur votre automatisation quotidienne.** Elles visent ce que le règlement appelle un service de traitement de données, défini à l'article 2.8 comme, pour l'essentiel, un service en nuage. Si votre logiciel est sous licence et installé sur un serveur du cabinet, ce chapitre n'est pas votre levier. Votre levier, c'est le contrat.

Ceci n'est pas un conseil juridique. Les références et les dates de consultation figurent à la fin.

## Export, API et webhooks ne résolvent pas le même problème

| | Export | API | Webhooks |
|---|---|---|---|
| À quoi ça sert | Tout emporter | Déplacer une donnée maintenant | Savoir qu'il s'est passé quelque chose |
| À quelle fréquence | ✓ Ponctuel ou mensuel | ✓ En continu | ✓ À l'instant même |
| Utile pour migrer | ✓ Oui, c'est son rôle | ~ Lent et par morceaux | ✗ Non |
| Utile pour intégrer | ✗ Non | ✓ Oui | ✓ Oui |
| Fait office de sauvegarde | ~ Seulement s'il est stocké ailleurs | ✗ Non | ✗ Non |
| Généralement inclus | ✓ Presque toujours | ~ Selon l'éditeur | ~ Selon l'éditeur |

## Les sept questions à poser avant de signer

1. **Où est la documentation, et puis-je la lire maintenant sans rien signer ?** Une URL publique que vous ouvrez aujourd'hui en dit plus que n'importe quelle réponse commerciale. Si on vous envoie un PDF, demandez de quelle année il date.
2. **Est-elle incluse dans l'abonnement ou facturée à part ?** Et si c'est à part, combien et avec quel quota d'appels. Une API facturée à l'usage change la conception de tout ce que vous bâtirez dessus.
3. **Est-elle en lecture seule ?** La moitié de la valeur est dans l'écriture. Une API en lecture seule ne peut pas créer le rendez-vous qu'un patient vient de réserver sur votre site.
4. **Quelles entités couvre-t-elle exactement ?** Patients, rendez-vous, devis, actes, factures, documents, odontogramme. Demandez la liste plutôt que la promesse, et vérifiez si le dossier clinique est dedans ou dehors.
5. **Y a-t-il des webhooks et quels événements sont émis ?** Sans eux, toute intégration finit par interroger en boucle, ce qui est le chemin le plus court vers une limite d'appels.
6. **Quelles sont les limites ?** Appels par minute, taille de page, nombre d'identifiants. Une limite publiée est bon signe ; une limite que personne ne sait vous dire est une limite que vous découvrirez en production.
7. **Que se passe-t-il le jour où je pars ?** Que l'API reste active pendant le préavis, avec un accès complet en lecture, doit figurer au contrat à côté de la clause d'export.

## Cinq choses qui se règlent seules quand il y a une API

- **Le site écrit dans l'agenda.** Le patient réserve, le rendez-vous apparaît, personne ne ressaisit rien le soir.
- **Les chiffres du trimestre pour l'expert-comptable.** Un rapport qui se génère tout seul le 1er du mois, au lieu d'un après-midi d'export et de rapprochement à la main.
- **Les relances par le canal que vous utilisez déjà.** Si votre prestataire de messagerie n'est pas intégré, une API vous permet de le brancher. Sans API, vous attendez que l'éditeur le fasse.
- **Votre propre tableau de bord.** Taux d'occupation du fauteuil, acceptation des devis et impayés, selon vos définitions et non celles de l'éditeur.
- **Nettoyer les doublons en masse.** Les repérer en lisant toute la base prend une demi-heure. Le faire écran par écran prend un mois.

![Vue journée de l'agenda avec les rendez-vous répartis en colonnes et par créneaux horaires](/screenshots/schedule-day.png)

*L'agenda en vue journée, avec les rendez-vous répartis en colonnes et par créneaux horaires.*

## Comment la tester en vingt minutes sans être développeur

1. **Demandez l'URL de la documentation.** Ouvrez-la sur votre téléphone devant le commercial. Soit elle charge, soit vous avez appris quelque chose.
2. **Cherchez la section authentification.** Elle doit expliquer comment obtenir un identifiant sans appeler le support.
3. **Demandez un environnement de test.** Ne faites jamais le premier appel sur les données réelles du cabinet.
4. **Copiez l'exemple de la documentation.** Presque toutes fournissent une ligne à coller dans un terminal :

```bash
curl -H "Authorization: Bearer $TOKEN" https://api.exemple.com/v1/patients
```

5. **Testez une écriture.** Créer un rendez-vous de test et le voir apparaître dans l'agenda, c'est le moment où vous savez que l'intégration existe vraiment.
6. **Cherchez le mot « limite » dans la documentation.** S'il n'y figure pas, posez la question par écrit et gardez la réponse.

Si l'une de ces six étapes exige une réunion, c'est aussi une réponse.

## Où se situe DentalPin

Chez DentalPin, chaque fonctionnalité expose un endpoint REST documenté en OpenAPI, inclus dans le prix et accompagné de webhooks, parce que le produit s'installe sur votre serveur et qu'une intégration ne devrait pas dépendre de notre autorisation. Le détail de ce qui est inclus est sur [tarifs](/fr/tarifs/).

## Sources

- Règlement (UE) 2016/679 (RGPD), articles 15.3, 20.1 et 20.2 : [eur-lex.europa.eu, CELEX 32016R0679](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32016R0679). Consulté le 30 août 2026.
- Règlement (UE) 2023/2854 (Data Act), articles 2.8, 29.1, 29.2, 30.2, 30.5 et 50 : [eur-lex.europa.eu, CELEX 32023R2854](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32023R2854). Consulté le 30 août 2026.
