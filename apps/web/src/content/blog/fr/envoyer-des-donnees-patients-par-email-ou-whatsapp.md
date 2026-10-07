---
title: "Envoyer une radiographie ou un compte rendu : le canal compte plus que le consentement"
description: "La CNIL impose une messagerie sécurisée avec chiffrement pour les données de santé. Ce qu'elle exige pour le fax, et ce qu'elle ne dit pas de WhatsApp."
pubDate: 2026-10-07
translationKey: enviar-datos-de-pacientes-por-email-o-whatsapp
tags: [rgpd, protection-des-donnees, dossier-clinique, securite]
---

L'orthodontiste réclame la panoramique, le laboratoire réclame les photos, le patient réclame son compte rendu "par WhatsApp". Le consentement est la partie facile des trois : il existe presque toujours, et quand il manque il s'obtient en trente secondes. Le difficile est le canal, et la position française est plus exigeante que celle de ses voisins. La CNIL ne demande pas de chiffrer une pièce jointe : elle demande de passer par une messagerie sécurisée intégrant un module de chiffrement.

Ceci n'est pas un conseil juridique. C'est la lecture des sources officielles citées en fin d'article, consultées le 7 octobre 2026.

## Ce n'est pas l'une des quatre autres questions

Cinq sujets se confondent en permanence, et quatre ont déjà leur réponse ailleurs.

- **Les rappels de rendez-vous** ne contiennent aucune donnée clinique. Ce sont une date et une heure, et la question y est celle du consentement : voir [les rappels par WhatsApp](/fr/blog/rappels-rendez-vous-whatsapp-dentaire/) et [la comparaison des canaux](/fr/blog/sms-whatsapp-email-rappels/).
- **Le droit d'accès** règle ce que vous devez remettre et dans quel délai quand [le patient demande son dossier](/fr/blog/patient-demande-son-dossier-dentaire/). Il règle le quoi, pas le comment.
- **Le RGPD du cabinet** est le cadre général : [bases légales, registre, durées](/fr/blog/rgpd-cabinet-dentaire/).
- **Ici**, c'est la question quotidienne qui vient après : vous savez déjà qu'il faut envoyer et à qui. Reste par quelle voie.

> **Le consentement rend la communication licite, il ne la rend pas sûre.** Ce sont deux couches indépendantes. Un envoi parfaitement consenti à la mauvaise adresse reste une violation de données, et aucun formulaire ne la rattrape après coup.

## Ce que la CNIL écrit, et c'est une obligation

La fiche de la CNIL consacrée au sujet s'appelle "Données de santé, messagerie électronique et fax". Elle commence par retirer au courriel son statut de voie normale :

> **Le constat de départ.** *"La messagerie électronique et le fax, même s'ils apportent un gain de temps, ne constituent pas a priori un moyen de communication sûr pour transmettre des données médicales nominatives."*

La raison est ensuite nommée précisément, et ce n'est pas l'interception : *"Une simple erreur de manipulation (adresse de messagerie erronée, erreur de numérotation du fax destinataire…) peut conduire à divulguer à des destinataires non habilités des informations couvertes par le secret médical et à porter ainsi gravement atteinte à l'intimité de la vie privée des personnes."*

L'obligation, elle, est formulée sans réserve : *"Si vous êtes amené à utiliser une messagerie électronique, vous devez impérativement recourir à une messagerie sécurisée intégrant un module de chiffrement des données."* La CNIL ajoute : *"Ces produits sont aujourd'hui disponibles sur le marché."*

![Dossier d'un patient avec l'odontogramme, les alertes cliniques, le plan de traitement en cours et le prochain rendez-vous](/screenshots/dental-chart.png)

*Le dossier d'où sort la pièce demandée : odontogramme, alertes cliniques et plan de traitement en cours.*

## Ce que cette fiche ne dit pas

Il faut le signaler plutôt que de le combler par une interprétation. La fiche est datée du 1er décembre 2015 et **ne traite pas la messagerie instantanée** : ni WhatsApp, ni aucun service équivalent n'y figure. Elle traite deux canaux, le courriel et le fax.

Autrement dit, l'absence de WhatsApp dans ce texte n'est pas une autorisation. Elle signifie que le raisonnement doit se faire à partir de l'article 32 du RGPD et de l'exigence générale que la fiche pose : un canal pour les données de santé doit intégrer le chiffrement et rester maîtrisé par le cabinet.

## Pourquoi le chiffrement de bout en bout ne tranche rien

L'argument courant est que WhatsApp chiffre de bout en bout, donc que la question est réglée. Elle ne l'est pas, parce que le transport n'a jamais été le seul problème. Ce qui reste en dehors du chiffrement est l'essentiel ici.

- **Les métadonnées.** Qui échange avec un cabinet dentaire, à quelle fréquence et quand. Une conversation hebdomadaire avec un cabinet dentaire est en soi une information sur la santé.
- **Le terminal.** Le message est déchiffré sur un téléphone, le plus souvent le portable personnel d'un membre de l'équipe, avec sa galerie photo et ses autorisations d'applications.
- **La sauvegarde.** Une radiographie envoyée par messagerie atterrit dans la sauvegarde automatique du téléphone. Le chiffrement de bout en bout n'y joue plus aucun rôle.
- **La relation de sous-traitance.** Un service de messagerie grand public n'est pas un sous-traitant du cabinet au sens de l'article 28 du RGPD, et il n'y a aucun contrat.

> **L'objet du courriel et le corps du message ne sont jamais chiffrés.** C'est le détail qui annule la moitié des envois faits correctement : la pièce jointe est protégée et l'objet annonce "Radio de Mme Lemaire". Le nom du patient vient de circuler en clair.

## Le fax : la CNIL l'encadre au lieu de l'interdire

La fiche ne proscrit pas le fax, elle liste cinq mesures, et la liste se lit comme un constat de fragilité. Le fax *"doit être situé dans un local médical, physiquement contrôlé et accessible uniquement au personnel médical et paramédical"*. L'impression *"doit être subordonnée à l'introduction d'un code d'accès personnel"*. À l'émission, l'appareil *"doit afficher l'identité du fax destinataire"*. Elle recommande enfin de doubler l'envoi par un envoi des documents originaux et de préenregistrer les destinataires dans le carnet d'adresses.

| Canal | Adapté au contenu clinique ? | Ce qui décide |
|---|---|---|
| Messagerie sécurisée avec module de chiffrement | ✓ Oui | C'est l'exigence posée par la CNIL |
| Courriel standard avec pièce jointe chiffrée, clé à part | ~ Pis-aller | Mieux que rien, en deçà de la messagerie sécurisée |
| Courriel standard non chiffré | ✗ Non | Exclu par la fiche |
| WhatsApp et messageries grand public | ✗ Non | Métadonnées, sauvegarde du téléphone, pas de sous-traitance |
| Fax | ~ Encadré | Admis sous les cinq mesures de la fiche |
| Courrier sous enveloppe fermée | ~ Possible | Protégé, mais sans traçabilité utile |
| Remise en main propre au cabinet, sur support chiffré | ✓ Oui | Aucune transmission, identité vérifiée sur place |
| Portail patient avec session authentifiée | ✓ Oui | Authentification, journal d'accès, pas de clé hors bande |

## Comment faire un envoi qui tient

1. **Fixez la base légale avant le canal.** Demande du patient, correspondance consentie entre praticiens, ou obligation légale. À défaut, chiffrer ne répare rien.
2. **Vérifiez l'identité et l'adresse.** C'est l'erreur que la CNIL cite en premier, et aucun chiffrement ne la corrige.
3. **Utilisez une messagerie sécurisée quand il en existe une.** C'est l'exigence, le reste est un repli.
4. **Si vous chiffrez une pièce jointe, transmettez la clé autrement.** Par téléphone ou de vive voix. Le même courriel n'est pas un autre canal.
5. **Laissez l'objet et le corps vides de données.** Pas de nom, pas de numéro de dossier, pas de diagnostic. "Document demandé" suffit.
6. **Consignez l'envoi dans le dossier.** Quoi, à qui, quand, sur quelle base. Sans cela, impossible de démontrer ensuite que la communication était légitime.
7. **Supprimez la copie de travail.** Le PDF généré pour l'envoi n'a rien à faire sur le poste de l'accueil.

![Chronologie d'un patient avec alertes cliniques, plan en cours et filtres par visites, traitements, mouvements financiers et communications](/screenshots/patient-timeline.png)

*L'onglet d'activité d'un dossier, avec le filtre des communications parmi les autres types d'entrées.*

## La remise en main propre reste la voie la plus simple

Avant d'installer quoi que ce soit, il reste la solution qu'aucun éditeur ne met en avant parce qu'elle ne vend rien : remettre au patient sa correspondance et sa radiographie au cabinet, sur un support chiffré. Aucune transmission, identité vérifiée en regardant la personne, et une trace dans le dossier. Pour un patient qui vient de toute façon à son rendez-vous, c'est le chemin le plus court.

## La conclusion honnête : arrêter d'envoyer des fichiers

Tout ce qui précède est une liste de précautions pour un envoi qui, pris autrement, n'a pas lieu. Si le document est récupéré depuis une session authentifiée au lieu de voyager en pièce jointe, les trois points sensibles disparaissent : aucune clé sur un second canal, aucun fichier dans la sauvegarde d'un tiers, et un journal d'accès horodaté.

C'est exactement ce que fait un [portail patient](/fr/blog/portail-patient-dentaire/), et c'est pourquoi c'est la recommandation de cet article plutôt que le courriel chiffré. Dans Dentalpin le document est publié sur le portail et chaque accès est journalisé avec son auteur et sa date, de sorte que l'envoi par courriel est réservé aux cas sans alternative. Le code est ouvert, le journal s'audite donc au lieu de se croire, et le [tarif est publié](/fr/tarifs/).

## Sources

- Commission nationale de l'informatique et des libertés, "Données de santé, messagerie électronique et fax", publié le 1er décembre 2015 : [cnil.fr](https://www.cnil.fr/fr/donnees-de-sante-messagerie-electronique-et-fax). Consulté le 7 octobre 2026.
- Règlement (UE) 2016/679 (RGPD), articles 9, 28 et 32 : [eur-lex.europa.eu](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consulté le 7 octobre 2026.
