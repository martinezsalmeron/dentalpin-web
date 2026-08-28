---
title: "SMS, WhatsApp ou email : ce que coûte vraiment un rappel de rendez-vous"
description: "Un SMS vers la France coûte environ 500 fois un email, et une apostrophe typographique double la facture. Tarifs publiés par chaque fournisseur, et ce qui arrive."
pubDate: 2026-08-28
translationKey: sms-whatsapp-email-recordatorios
tags: [rappels, sms, whatsapp, email, couts, agenda]
---

Un rappel par email coûte 0,00016 dollar, un rappel WhatsApp moins d'un centime, et un SMS vers un mobile français coûte 0,0798 dollar au tarif public de Twilio, soit environ 500 fois l'email. Voilà la réponse courte. Ce qui décide vraiment de votre facture, ce n'est pas le canal choisi, mais le nombre de messages envoyés par rendez-vous, la présence d'un emoji ou d'une apostrophe typographique dans le texte, et le nombre de patients qui répondent.

Tous les prix ci-dessous viennent de la page tarifaire de chaque fournisseur, consultée le 28 août 2026. Aucun n'est une estimation ni ne provient d'un comparateur.

> **Twilio publie ses tarifs en dollars, pas en euros.** Ils sont repris tels quels ici, parce que les convertir au cours du jour donnerait un chiffre invérifiable demain. Votre fournisseur, lui, vous facturera en euros et avec sa marge par-dessus.

## Ce que coûte un message, canal par canal

Trois façons de facturer différentes, et c'est déjà la moitié de l'histoire.

| Canal | Prix par message | Mode de facturation | Reçoit les réponses ? |
|---|---|---|---|
| Email (Amazon SES, offre Essentials) | 0,16 $ pour 1 000 envois | Par email envoyé, qu'il arrive ou non | ✓ Oui |
| WhatsApp (Twilio plus le tarif Meta) | 0,005 $ Twilio, plus le tarif Meta | Uniquement à la livraison du modèle | ✓ Oui |
| SMS vers la France (Twilio) | 0,0798 $ | Par segment, pas par message | ~ Seulement depuis un numéro |

La colonne de droite est celle que presque personne ne regarde avant de signer, et c'est elle qui casse le principe du « répondez OUI pour confirmer ». Nous y revenons plus bas.

Le SMS est le seul canal dont le prix dépend du pays destinataire. Voici les tarifs publiés par Twilio pour les marchés voisins :

| Destination | Prix par segment |
|---|---|
| Pologne | 0,0457 $ |
| Portugal | 0,0501 $ |
| Royaume-Uni | 0,056 $ |
| France | 0,0798 $ |
| Espagne | 0,0875 $ |
| Italie | 0,0927 $ |
| Allemagne | 0,112 $ |

Le même rappel coûte 40 % de plus vers l'Allemagne que vers la France. Si vous suivez des patients frontaliers, vous le payez déjà.

## Une apostrophe peut doubler la facture SMS

Voici l'erreur coûteuse, et ce n'est pas le logiciel qui la commet : c'est celui qui rédige le modèle.

Un SMS n'est pas facturé au message mais au segment. En codage GSM-7, un segment contient 160 caractères, et 153 par segment dès que le message est découpé en plusieurs, car sept caractères partent dans l'en-tête qui les relie.

Dès qu'un caractère que GSM-7 ne sait pas représenter entre dans le texte, tout le message bascule en codage UCS-2 et la limite tombe à 70 caractères, ou 67 par segment dans un message découpé. Twilio cite quatre déclencheurs : les emojis, les alphabets non latins, les caractères latins étendus et les guillemets ou apostrophes typographiques.

Pour le français, la nouvelle est à moitié bonne. Le jeu GSM-7 contient à, è, é, ù, ì et ç, donc un rappel ordinaire passe sans encombre. Il ne contient en revanche ni â, ni ê, ni î, ni ô, ni û : un « s'il vous plaît » suffit à faire basculer tout le message en UCS-2 et à diviser la capacité par plus de deux.

> **L'apostrophe courbe coûte plus cher que l'emoji, parce que personne ne la voit.** Un texte rédigé dans Word puis collé dans le modèle transporte des apostrophes typographiques sans que rien ne le signale, et un rappel de 90 caractères passe d'un segment à deux. Sur 800 rappels par mois, cela fait 127,68 $ au lieu de 63,84 $.

Deux vérifications qui valent de l'argent chaque mois :

- **Comptez les caractères du modèle une fois rendu**, avec le nom de patient le plus long de votre base à l'intérieur, pas avec le texte d'exemple.
- **Rédigez le modèle dans un éditeur de texte brut.** Le traitement de texte remplace apostrophes et tirets sans prévenir.

Twilio facture en plus 0,001 $ pour chaque message terminant en statut échoué : une liste de mobiles mal tenue a donc elle aussi un prix, même modeste.

![Agenda de la journée avec les rendez-vous de chaque praticien, leurs horaires et leur statut](/screenshots/schedule-day.png)

*Une journée d'agenda. Chaque rendez-vous de cet écran représente au moins un message par mois sur la facture.*

## Sur WhatsApp, le prix dépend de la réponse du patient

Meta a changé de modèle le 1er juillet 2025 et facture depuis au message, non plus à la conversation de 24 heures. Le prélèvement a lieu quand le modèle est livré, pas quand il est envoyé.

Les modèles sont classés en marketing, utilitaire et authentification, et un rappel de rendez-vous relève de l'utilitaire. Ce qui rend le coût difficile à prévoir, c'est tout ce que Meta laisse gratuit :

- **Tout ce qui passe dans une fenêtre de service ouverte.** Les messages hors modèle et les modèles utilitaires ne sont pas facturés tant que cette fenêtre est ouverte, et c'est le patient qui l'ouvre en vous écrivant.
- **Les fenêtres d'entrée gratuite durent 72 heures** et rien de ce qui y est envoyé n'est facturé, modèles compris. Elles s'ouvrent depuis une publicité clic-vers-WhatsApp ou un bouton d'appel à l'action de page.
- **Les paliers de volume abaissent le tarif** utilitaire et authentification selon le volume mensuel. Ils sont propres à chaque marché et catégorie, s'agrègent au niveau du portefeuille d'entreprise et se réinitialisent chaque mois.

La conséquence pratique est contre-intuitive : un rappel qui invite à répondre revient moins cher qu'un rappel muet, car la réponse ouvre la fenêtre et le message suivant de cette conversation est gratuit.

Meta publie ses tarifs par marché et par devise dans des fiches téléchargeables, avec les montants en vigueur depuis le 1er juillet 2026, date à laquelle l'Espagne, l'Italie, la Pologne et le Royaume-Uni sont passés d'un tarif régional à un tarif propre. Par-dessus, votre fournisseur ajoute le sien : Twilio facture 0,005 $ par message, le même chiffre pour tous les marchés, et répercute celui de Meta.

**Les limites d'envoi ne vous concernent presque certainement pas.** WhatsApp échelonne le nombre de numéros distincts joignables sur 24 heures glissantes hors fenêtre de service : 250, puis 2 000, puis 10 000, 100 000 et illimité. Un cabinet à quarante rendez-vous par jour écrit à quarante numéros, le premier palier suffit largement. La montée est automatique si la qualité est bonne et si vous avez consommé au moins la moitié de votre limite sur les sept derniers jours, et elle s'applique en moins de six heures.

## Le canal le moins cher est aussi celui qui arrive le moins bien

À 0,16 $ les mille, l'email ne joue pas dans la même catégorie : il est environ cent fois moins cher que tout le reste. Le piège, c'est que le prix se paie à l'envoi et que la remise en boîte de réception n'est pas incluse.

Gmail et Yahoo ont durci leurs exigences en février 2024 et constituent aujourd'hui le vrai filtre. Il vaut la peine de séparer ce qui s'applique à tout le monde de ce qui ne vise que les gros expéditeurs, car la plupart des articles mélangent les deux.

| Exigence | Qui est concerné | Ce qu'il faut |
|---|---|---|
| SPF ou DKIM | ✓ Tous les expéditeurs | Au moins l'un des deux, toujours |
| SPF, DKIM et DMARC | ~ Au-delà de 5 000 par jour vers Gmail | Les trois, DMARC même en `p=none` |
| Désabonnement en un clic | ~ Au-delà de 5 000 par jour | En-tête `List-Unsubscribe` en un clic |
| Taux de plaintes | ✓ Tous les expéditeurs | Sous 0,3 % dans Postmaster Tools |

> **Le seuil de 5 000 messages par jour n'est pas le vôtre, et ce n'est pas là que ça va casser.** Aucun cabinet n'en approche. Ce qui s'applique dès le premier email, en revanche, c'est l'authentification du domaine et le taux de plaintes, et c'est précisément là que disparaît un rappel envoyé depuis une boîte gratuite sans SPF ni DKIM.

Google recommande en outre de rester sous 0,10 % de plaintes et de ne jamais approcher 0,30 %. Yahoo demande le même plafond de 0,3 % et exige de traiter les désabonnements sous deux jours. Ces seuils sont bas : sur 800 emails par mois, trois patients qui cliquent sur « spam » vous placent à 0,375 %.

## L'expéditeur qui fait joli est celui qui ne peut pas recevoir de réponse

Un expéditeur alphanumérique, c'est le « CABINET » qui s'affiche à la place d'un numéro. Twilio le propose sans surcoût dans 150 pays, avec une limite qui décide de tout le flux : il ne sert qu'à envoyer des SMS, jamais à en recevoir.

Si votre rappel dit « répondez OUI pour confirmer », avec un expéditeur alphanumérique cette réponse ne va nulle part. Pour la recevoir, il faut louer un numéro, et cela se paie. Les tarifs de location mensuels publiés par Twilio donnent une idée de l'écart :

- **Royaume-Uni**, numéro mobile : 2,50 $ par mois.
- **Allemagne**, numéro mobile : 30 $ par mois.
- **Italie**, numéro mobile : 45 $ par mois.
- **Portugal**, numéro mobile : 135 $ par mois.

Plus de cinquante fois d'écart entre le moins cher et le plus cher de ces quatre : cela mérite de vérifier le tarif français auprès de votre fournisseur avant de décider que la confirmation par SMS sera la solution. WhatsApp et l'email n'ont pas ce problème, tous deux sont bidirectionnels dès le premier jour.

## Ce que cela fait sur un vrai mois

Prenons un cabinet à quarante rendez-vous par jour, cinq jours et demi par semaine : environ 800 rappels par mois, un par rendez-vous. Aux tarifs publiés ci-dessus, hors marge de votre fournisseur :

| Canal | 800 rappels par mois |
|---|---|
| Email | 0,13 $ |
| WhatsApp, part Twilio seule | 4,00 $ plus le tarif Meta |
| SMS vers la France, un segment | 63,84 $ |
| SMS vers la France, deux segments | 127,68 $ |

La dernière ligne n'a rien d'exotique. C'est ce qui arrive quand quelqu'un colle le texte depuis Word, ou quand le message contient l'adresse du cabinet et dépasse 160 caractères.

Ajoutez un second rappel le jour même et tous les chiffres doublent encore. Cette décision, un message ou deux, pèse plus lourd que le choix du canal.

![Dossier patient avec l'historique d'activité filtrable par visites, traitements, finances et communications](/screenshots/patient-timeline.png)

*L'historique d'un patient, avec les communications en filtre. C'est là qu'on vérifie si un message a été remis ou seulement envoyé.*

## Comment répartir les canaux sans compliquer

1. **Demandez le canal préféré à la première visite** et enregistrez-le dans le dossier. C'est la donnée qui évite le plus de réclamations et que presque personne ne saisit.
2. **Mettez l'email par défaut** pour le rappel anticipé : à ce prix, autant l'envoyer à tout le monde.
3. **Gardez le SMS pour l'alerte du jour même**, quand le coût par message se justifie face à la valeur du créneau.
4. **Utilisez WhatsApp là où vos patients l'utilisent déjà**, et rédigez le modèle en invitant à répondre : cela confirme le rendez-vous et ouvre la fenêtre gratuite.
5. **Relisez le modèle SMS une fois par trimestre** en comptant les caractères, avec le nom le plus long de votre base.
6. **Mesurez les remises, pas les envois.** Un rapport « 800 envoyés » ne dit rien ; le chiffre utile est le nombre de messages remis et le nombre d'échecs.

Le chiffre qu'aucun tableur ne vous donnera, c'est le nombre de messages que votre logiciel envoie par rendez-vous sans qu'on le lui demande. Les compter pendant un mois vaut la peine avant de renégocier un tarif.

Dans Dentalpin, l'agenda, le dossier patient et le journal des communications partagent la même base de données : le décompte de ce qui a été envoyé et de ce qui a été remis sort du même endroit que l'agenda, et le logiciel est open source, visible depuis les [tarifs](/fr/tarifs/). Cela dit, la partie de cet article qui vous fera vraiment économiser ne dépend pas du programme utilisé, mais du comptage des caractères et du fait de ne pas envoyer trois messages là où un seul suffit.

## Sources

- Tarifs SMS de Twilio par pays, [twilio.com/en-us/sms/pricing](https://www.twilio.com/en-us/sms/pricing/fr), pages France, Espagne, Portugal, Allemagne, Italie, Pologne et Royaume-Uni, consultées le 28 août 2026.
- Tarifs WhatsApp de Twilio, [twilio.com/en-us/whatsapp/pricing](https://www.twilio.com/en-us/whatsapp/pricing), consultée le 28 août 2026.
- Limites de caractères et segments d'un SMS, [twilio.com/docs/glossary/what-sms-character-limit](https://www.twilio.com/docs/glossary/what-sms-character-limit), consultée le 28 août 2026.
- Jeu de caractères GSM-7, [twilio.com/docs/glossary/what-is-gsm-7-character-encoding](https://www.twilio.com/docs/glossary/what-is-gsm-7-character-encoding), consultée le 28 août 2026.
- Tarifs de la WhatsApp Business Platform, [developers.facebook.com/docs/whatsapp/pricing](https://developers.facebook.com/docs/whatsapp/pricing), consultée le 28 août 2026.
- Limites d'envoi de la WhatsApp Business Platform, [developers.facebook.com/documentation/business-messaging/whatsapp/messaging-limits](https://developers.facebook.com/documentation/business-messaging/whatsapp/messaging-limits), consultée le 28 août 2026.
- Tarifs d'Amazon SES, [aws.amazon.com/ses/pricing](https://aws.amazon.com/ses/pricing/), consultée le 28 août 2026.
- Directives de Google pour les expéditeurs, [support.google.com/a/answer/81126](https://support.google.com/a/answer/81126), consultée le 28 août 2026.
- Bonnes pratiques Yahoo pour les expéditeurs, [senders.yahooinc.com/best-practices](https://senders.yahooinc.com/best-practices/), consultée le 28 août 2026.
