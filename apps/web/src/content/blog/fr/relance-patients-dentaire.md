---
title: "Relance des patients au cabinet dentaire : les faire revenir en contrôle"
description: "Monter un système de relance qui fonctionne : qui fixe l'intervalle, d'où sort la liste des patients dus, ce que dit le message et les chiffres à suivre."
pubDate: 2026-08-21
translationKey: recall-dental-revisiones
tags: [relance, controles, agenda, fidelisation]
---

Un système de relance, ce sont deux choses : une date de prochain contrôle enregistrée dans le dossier clinique de chaque patient, et une routine hebdomadaire qui sort la liste de ceux qui l'ont dépassée et les contacte. Cette date n'est pas six mois par défaut. Elle se décide à la fin de chaque visite, selon le risque de la personne, et elle est notée avec son accord. Le reste relève de la logistique : un canal réellement lu, un délai suffisant pour se réorganiser, et une seule relance pour ceux qui ne répondent pas.

Ce qui coince, ce n'est presque jamais la formulation du message. C'est que la date n'a pas été saisie : sans elle il n'y a aucune liste à sortir, et le cabinet finit par éplucher les dossiers à la main le jour où quelqu'un y pense.

## Six mois, c'est une habitude, pas une règle

L'intervalle de contrôle est une décision clinique prise patient par patient, pas une constante appliquée à toute la base. La recommandation CG19 du NICE britannique, la référence publiée la plus explicite sur le sujet, l'énonce dès sa première recommandation : l'intervalle est déterminé spécifiquement pour chaque patient et adapté à ses besoins, à partir d'une évaluation de son niveau de maladie et de son risque.

Trois autres règles pratiques viennent du même texte. L'intervalle se choisit à la fin du contrôle ou à l'issue du traitement, pas une fois le patient parti. Il est discuté avec lui et consigné, avec la mention de son accord ou de son désaccord. Et il est réexaminé à chaque visite suivante, pour être allongé ou raccourci selon ce qui s'est passé.

| | Moins de 18 ans | 18 ans et plus |
|---|---|---|
| Intervalle le plus court | 3 mois | 3 mois |
| Intervalle le plus long | 12 mois | 24 mois |
| Valeurs attribuées | 3, 6, 9 ou 12 mois | 3, 6, 9, 12, 15, 18, 21 ou 24 mois |
| Quand il se décide | À la fin du contrôle ou du traitement | À la fin du contrôle ou du traitement |
| Où il est consigné | Dossier clinique, avec l'accord du patient | Dossier clinique, avec l'accord du patient |

C'est une recommandation du système britannique, pas une norme française : les durées sont une référence et non une obligation ici. Ce qui se transpose entièrement, en revanche, c'est la structure : l'intervalle se décide, se justifie, se note et se réexamine.

> **Chez l'adulte, les données ne distinguent pas le contrôle semestriel du contrôle fondé sur le risque.** Une revue Cochrane de 2020, portant sur deux essais et 1 736 participants, n'a trouvé que peu ou pas de différence sur le nombre de faces dentaires cariées, le saignement gingival et la qualité de vie liée à la santé bucco-dentaire à quatre ans, ni entre l'intervalle fondé sur le risque et six mois (données de certitude élevée), ni en comparant 24 mois à l'un ou l'autre. Chez l'enfant et l'adolescent, la revue précise que les données sont incertaines.

Ce n'est pas une autorisation d'arrêter de relancer qui que ce soit. C'est l'argument qui fait de l'intervalle un champ avec un raisonnement derrière plutôt qu'une constante. Si le logiciel ne sait qu'ajouter six mois, il prend par défaut la décision que la recommandation demande de prendre patient par patient.

## La liste sort du dossier, pas d'un tableur

Une relance qui vit dans un tableur se désynchronise au bout d'un mois. Quelqu'un prend rendez-vous par téléphone, personne ne le raye, et le message suivant part quand même. La liste doit être une requête sur des données déjà présentes dans le dossier clinique.

| Donnée | À quoi elle sert | Si elle manque |
|---|---|---|
| Date du prochain contrôle | C'est elle qui génère la liste de la semaine | ✗ Il n'y a pas de liste : on relit les dossiers à la main |
| Intervalle attribué et par qui | Savoir si un écart de neuf mois est un choix clinique ou un oubli | ~ Personne n'ose y toucher |
| Motif du contrôle | Écrire un message précis plutôt qu'une formule passe-partout | ~ Le message dit « contrôle » et n'accroche pas |
| Canal préféré | Écrire là où la personne répond vraiment | ✗ Vous insistez par un canal qu'elle a demandé d'éviter |
| Date de la dernière relance | Ne pas écrire trois fois dans le même mois | ✗ Les messages se doublonnent et les gens se désabonnent |
| Statut du patient | Sortir de la liste ceux qui n'ont plus à y figurer | ✗ Vous écrivez à des patients partis ou décédés |
| Traitement resté en cours | Distinguer « un contrôle est dû » de « quelque chose est resté en plan » | ~ Deux conversations différentes se mélangent |

- **Saisissez la date avant que le patient quitte le fauteuil.** C'est le seul moment où quelqu'un sait vraiment quand cette personne doit revenir, et c'est ce que la recommandation demande explicitement.
- **Enregistrez l'intervalle, pas seulement la date obtenue.** Quand un patient reporte, la date bouge ; le raisonnement des douze mois doit survivre à ce déplacement.
- **Séparez « prochain contrôle » et « prochain rendez-vous ».** Un patient peut avoir rendez-vous la semaine prochaine pour terminer une endodontie et un contrôle dû dans quatorze mois. Si c'est le même champ, l'un des deux disparaît.

![Dossier d'un patient, onglet activité ouvert : alertes cliniques, plan de traitement en cours, prochain rendez-vous et historique chronologique des visites, traitements et communications](/screenshots/patient-timeline.png)

*L'activité d'un patient dans l'ordre, filtrable par visites, traitements et communications : quand il est venu pour la dernière fois et ce qui lui a été envoyé depuis.*

## En retard, et de combien : cela fait trois listes, pas une

Mettre dans le même envoi celui qui a dépassé sa date d'une semaine et celui qu'on n'a pas vu depuis trois ans produit un message qui ne convient à aucun des deux. Le découpage habituel donne trois groupes et trois messages distincts.

1. **À venir.** Dus dans deux à quatre semaines. Le message est un rappel courtois avec un moyen de prendre rendez-vous, et c'est le groupe qui répond le mieux, parce que personne n'a encore décroché.
2. **Récemment en retard.** Date dépassée depuis moins d'un intervalle complet. Ici le message nomme la dernière visite, parce qu'une date précise fonctionne mieux qu'une formule vague.
3. **Décrochés.** Plus de deux intervalles sans reparaître. Vérifiez les coordonnées et leur rattachement au cabinet avant d'écrire ; les récupérer est un travail différent de la relance et mérite sa propre campagne.

Les deux premiers groupes constituent la relance proprement dite et tiennent dans la routine hebdomadaire. Le troisième est une campagne ponctuelle, une ou deux fois par an, menée posément.

> **Un patient en retard n'est pas un déserteur.** La raison la plus fréquente d'un dépassement, c'est que personne ne l'a prévenu, et le ton du message devrait le présumer jusqu'à preuve du contraire.

## Le message : par quel canal, quand et avec quoi dedans

Sur le canal, il existe des données, à lire avec précaution. Une revue Cochrane de 2013, sur huit essais randomisés et 6 615 participants, a comparé les rappels par SMS à l'absence de rappel et à l'appel téléphonique.

Le SMS a amélioré la présence par rapport à l'absence de rappel, avec un risque relatif de 1,14 (intervalle de confiance à 95 % : 1,03 à 1,26). Face à l'appel téléphonique, il fait jeu égal, avec un risque relatif de 0,99 (0,95 à 1,02). Les taux de présence étaient de 67,8 % sans rappel, 78,6 % avec un message et 80,3 % avec un appel, et le message coûtait 55 % à 65 % de moins que l'appel. La revue elle-même qualifie ces données de qualité faible à modérée.

> **Ce sont des données sur le rappel d'un rendez-vous déjà pris, pas sur l'invitation à en prendre un.** Ce sont deux situations différentes et la seconde est plus difficile. Ce qui se transpose, c'est la comparaison entre canaux : l'écrit a fait aussi bien que l'appel pour une fraction du coût, et cela suffit à décider par où commencer.

Cela posé, voici ce que le message doit contenir :

- **Le nom du cabinet dès la première ligne.** Un message qui ne s'identifie pas au premier coup d'œil est supprimé avant d'être lu.
- **La date de la dernière visite et ce qui est dû maintenant.** « Votre dernier contrôle remonte à mars 2025 » est bien plus concret que « cela fait un moment ».
- **La durée prévue.** L'objection silencieuse à un contrôle, c'est le temps, et « une vingtaine de minutes » la désamorce.
- **Un moyen de répondre en une étape.** Répondre au message lui-même, un lien, ou un numéro auquel quelqu'un décroche vraiment. Si prendre rendez-vous suppose d'appeler aux heures de bureau, la moitié du groupe s'arrête là.
- **Une sortie claire.** Comment ne plus recevoir de messages, ou changer de canal. Perdre un contact coûte moins cher que gagner une réclamation.

## La routine hebdomadaire

Une relance fonctionne parce qu'elle a lieu chaque semaine, pas parce que le message est brillant. Une demi-heure fixe, avec une personne nommément responsable.

1. **Sortez la liste des dus et des retards**, filtrée sur la date de prochain contrôle.
2. **Retirez ceux qui ont déjà un rendez-vous**, le filtre qui évite le rappel le plus agaçant qui soit.
3. **Vérifiez les décès et les coordonnées** modifiées depuis le dernier envoi.
4. **Séparez en deux groupes** selon la liste ci-dessus, avec le texte propre à chacun.
5. **Envoyez par le canal préféré de chaque patient**, pas par celui qui arrange ce matin-là.
6. **Notez la date de la relance dans le dossier**, pour que la même personne ne ressorte pas la semaine suivante.
7. **Reprenez l'envoi précédent** : qui a pris rendez-vous, qui n'a pas répondu, qui a demandé à ne plus être contacté.

Celui qui ne répond pas reçoit un second message, dix à quatorze jours plus tard, et on s'arrête là. Une troisième tentative dans le même cycle gagne peu de rendez-vous et perd des contacts.

## Quatre chiffres disent si cela marche

| Indicateur | Comment il se calcule | Ce qu'il déclenche |
|---|---|---|
| Couverture de la liste | Patients actifs ayant une date de prochain contrôle, sur le total des actifs | Si elle est basse, le problème n'est pas le message : la date n'est pas saisie en fin de visite |
| Taux de réponse | Rendez-vous pris rapportés aux relances envoyées, par envoi | Compare canaux et formulations, et un mauvais envoi se repère en une semaine |
| Stock de retards | Combien ont dépassé leur date sans rendez-vous | S'il grossit de mois en mois, la routine hebdomadaire n'a pas lieu |
| Respect de l'intervalle | Combien reviennent dans l'intervalle qui leur a été attribué | Distingue le système qui envoie des messages de celui qui fait revenir les gens |

La couverture est le premier chiffre à regarder et celui que presque personne ne regarde. Un cabinet dont 40 % des patients actifs n'ont pas de date de prochain contrôle n'a pas un problème de relance : il a la moitié de son fichier invisible pour tout message qu'il enverra.

![Écran de rapports de l'agenda : nombre total de rendez-vous sur la période, taux de réalisation, taux d'absences, premières visites, heures travaillées par praticien et occupation par fauteuil](/screenshots/reports.png)

*Les taux de réalisation et d'absences de la période, à côté de l'occupation par fauteuil : les chiffres avec lesquels on établit si un envoi de relances a servi à quelque chose.*

## Par où commencer

1. **Mesurez la couverture aujourd'hui**, en comptant les patients actifs qui ont une date de prochain contrôle. Ce nombre est votre point de départ.
2. **Ajoutez l'étape en fin de visite** : avant que le patient se lève, intervalle décidé, noté et discuté avec lui.
3. **Sortez la première liste de retards** et enlevez ceux qui ont déjà un rendez-vous.
4. **Rédigez deux modèles**, un pour les dus à venir et un pour les retards récents, avec les cinq éléments ci-dessus.
5. **Bloquez une demi-heure par semaine** dans l'agenda d'une personne précise.
6. **Consignez pendant deux mois** les relances envoyées et les rendez-vous pris, envoi par envoi.
7. **Ne changez qu'une chose à la fois**, le texte ou le canal, pour savoir laquelle des deux a bougé le chiffre.

DentalPin intègre les relances à côté de l'agenda, du dossier clinique et des rapports, avec les communications conservées dans le dossier du patient, ce qu'il faut pour savoir qui a été contacté et quand. Le détail de chaque version est sur [tarifs](/fr/tarifs/).

Ceci n'est pas un avis clinique : l'intervalle de contrôle d'un patient est toujours décidé par le praticien qui le suit.

## Sources

- National Institute for Health and Care Excellence. *Dental checks: intervals between oral health reviews* (CG19), recommandations 1 à 8. [ncbi.nlm.nih.gov](https://www.ncbi.nlm.nih.gov/books/n/nicecg19/ch5/). Consulté le 21 août 2026.
- Fee PA, Riley P, Worthington HV, Clarkson JE, Boyers D, Beirne PV. *Recall intervals for oral health in primary care patients*. Cochrane Database of Systematic Reviews, 14 octobre 2020, DOI 10.1002/14651858.CD004346.pub5. [pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC8256238/). Consulté le 21 août 2026.
- Gurol-Urganci I, de Jongh T, Vodopivec-Jamsek V, Atun R, Car J. *Mobile phone messaging reminders for attendance at healthcare appointments*. Cochrane Database of Systematic Reviews, 5 décembre 2013, DOI 10.1002/14651858.CD007458.pub3. [cochrane.org](https://www.cochrane.org/evidence/CD007458_mobile-phone-messaging-reminders-attendance-healthcare-appointments). Consulté le 21 août 2026.
