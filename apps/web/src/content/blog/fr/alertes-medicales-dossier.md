---
title: "Allergies et alertes médicales : qu'elles se voient toujours"
description: "Six champs par allergie, trois réponses valables quand il n'y en a aucune, et les quatre écrans où l'alerte doit apparaître seule. Sources officielles citées."
pubDate: 2026-09-12
translationKey: alergias-alertas-medicas
tags: [allergies, alertes-medicales, dossier-clinique, securite-patient, rgpd]
---

Une allergie ne protège le patient que si elle occupe un champ à elle et qu'elle apparaît seule sur les écrans où l'on prescrit et où l'on soigne. Six choses se notent pour chacune : la substance, ce qui est arrivé au patient, avec quelle gravité, si elle est toujours d'actualité, si elle est confirmée ou seulement rapportée, et quand et par qui.

Et quand il n'y en a aucune, cela s'écrit aussi. Un champ allergies vide ne dit pas que le patient n'a pas d'allergie, il dit que personne n'a encore posé la question, et les deux phrases mènent à des décisions différentes.

## Six champs par allergie, et aucun en texte libre

Une allergie tapée dans la zone d'observations disparaît le jour où cette zone fait onze lignes. Elle cesse d'être filtrable, elle cesse de pouvoir alerter qui que ce soit, et elle cesse d'être migrable vers un autre logiciel.

| Champ | Ce qu'on y note | Exemple |
|---|---|---|
| Substance | Le principe actif ou le matériau, jamais la seule marque | Amoxicilline, latex, chlorhexidine, nickel |
| Manifestation | Ce qui est réellement arrivé, en termes cliniques | Urticaire, angioedème, bronchospasme, anaphylaxie |
| Gravité | Ce qu'a été la réaction déjà survenue | Légère, modérée, sévère |
| Criticité | Le dommage possible lors d'une exposition future | Faible, élevée, non évaluable |
| Statut clinique | Si l'allergie est toujours d'actualité | Active, inactive, résolue |
| Vérification | D'où vient l'information | Non confirmée, confirmée, réfutée, erreur de saisie |
| Date et source | Quand cela a été saisi et qui l'a dit | 12/03/2024, la patiente ; compte rendu d'allergologie |

Ces champs ne sont pas une convention maison. Ce sont ceux de la ressource AllergyIntolerance de HL7 FHIR, le standard avec lequel les systèmes de santé s'échangent cette information, et reprendre ses valeurs est ce qui permet à l'allergie de survivre à un changement de logiciel.

> **Gravité et criticité sont deux champs distincts, et les confondre vide les deux.** FHIR place la gravité sur la réaction précise qui a eu lieu (légère, modérée ou sévère) et la criticité sur la substance, comme estimation du dommage potentiel d'une exposition future. Un logiciel qui n'offre qu'une liste déroulante vous oblige à choisir laquelle des deux vous perdez.

![Fiche patient sur l'onglet informations, antécédents médicaux dépliés, la rubrique allergies affichant les AINS avec une criticité élevée](/screenshots/patients.png)

*Les antécédents médicaux en champs séparés : allergies, médicaments, maladies systémiques et conditions particulières. L'étiquette orange à côté de l'allergie est son niveau de criticité.*

## Aucune allergie connue est une donnée, un champ vide n'en est pas une

La recommandation CG183 du NICE britannique sur l'allergie médicamenteuse demande de documenter le statut allergique du patient par l'une de trois mentions : allergie médicamenteuse, aucune connue, ou impossible à établir. Les trois sont des informations et les trois se consignent.

Le champ vide n'est aucune des trois. C'est l'absence de la question, et dans un cabinet où plusieurs personnes saisissent, il est impossible de le distinguer d'un oubli.

> **Un champ vide et un "aucune connue" se lisent presque pareil à l'écran et veulent dire le contraire l'un de l'autre.** Le premier dit que personne n'a demandé. Le second dit qu'on a demandé et que la réponse était non. Si le logiciel ne les distingue pas, le cabinet ne peut pas savoir pour qui l'interrogatoire manque encore.

## Allergie, intolérance et effet indésirable ne sont pas la même chose

La même recommandation du NICE demande que le statut allergique soit documenté séparément des effets indésirables médicamenteux et qu'il soit clairement visible pour tout professionnel qui prescrit. FHIR le porte dans un champ à deux valeurs, allergie ou intolérance, qui sépare le mécanisme immunologique de tout ce qui n'en est pas un.

En pratique la distinction tient en trois lignes :

- **Allergie.** Un mécanisme immunitaire est en cause. Urticaire, angioedème, bronchospasme ou anaphylaxie après exposition.
- **Intolérance.** Le patient réagit mal sans que ce mécanisme intervienne.
- **Effet indésirable.** Un effet connu du médicament. Les nausées sous antibiotique en sont l'exemple quotidien.

Ranger les trois dans la case allergies est commode le jour même et coûteux ensuite, parce que cela retire des options thérapeutiques que le patient tolère et que cela noie les vraies allergies parmi des entrées qui n'en sont pas.

## L'allergie à la pénicilline n'en est presque jamais une

C'est là que la distinction précédente coûte le plus cher, et il existe un chiffre officiel pour en donner la taille.

> **Les CDC le formulent ainsi : 10 % des patients américains déclaraient une allergie à la pénicilline et, après évaluation clinique, moins de 1 % l'étaient réellement.** Les mêmes CDC ajoutent que les anticorps IgE spécifiques peuvent diminuer avec le temps, de sorte que certains patients tolèrent plus tard ce qu'ils ne toléraient pas avant.

Rien de tout cela n'autorise un cabinet dentaire à ignorer une allergie déclarée. Ce qui change, c'est ce qu'on écrit, parce qu'une étiquette sans histoire derrière elle ne pourra jamais être réexaminée.

Si le dossier porte "allergique à la pénicilline" et rien d'autre, cette étiquette suivra le patient toute sa vie. S'il porte la réaction précise, l'année où elle est survenue et qui l'a affirmée, un allergologue a de quoi l'évaluer et, le cas échéant, la lever.

## Les alertes qui ne sont pas des allergies

La case allergies est la plus connue, mais la moitié de ce qu'il faut voir avant de commencer n'est pas une allergie.

- **Anticoagulants et antiagrégants.** Ils changent la planification de tout geste hémorragique, et ce sont des médicaments et non des allergies, donc il leur faut leur propre champ.
- **Bisphosphonates et dénosumab.** La voie orale comme la voie intraveineuse comptent, et ce qu'il faut sous la main c'est la molécule, l'indication et la date de début.
- **Risque d'endocardite infectieuse.** La recommandation 2023 de la Société européenne de cardiologie sur l'endocardite préconise une antibioprophylaxie chez les patients à haut risque avant les actes dentaires à risque, et définit les deux termes. Haut risque : endocardite antérieure, prothèse valvulaire chirurgicale ou par cathéter, matériel de réparation valvulaire, cardiopathie congénitale (hors anomalies valvulaires isolées) et dispositif d'assistance ventriculaire en thérapie de destination. Actes à risque : extractions, chirurgie orale et toute manipulation de la région gingivale ou périapicale, y compris le détartrage et le traitement endodontique.
- **Grossesse et allaitement.** Avec une date, parce que c'est la seule alerte de cette liste qui expire toute seule.
- **Diabète, épilepsie et immunodépression.** Ils changent le rendez-vous, pas seulement le soin.

Le troisième point est celui qui arrive le plus souvent en retard, parce que le détartrage figure sur la liste des actes à risque et se programme d'ordinaire comme une séance d'hygiène de routine. La même recommandation européenne conseille à ces patients un détartrage professionnel et un suivi au moins deux fois par an, donc ce sont des rendez-vous fréquents et l'alerte doit atteindre l'agenda, pas seulement le dossier.

## Une information qu'il faut aller chercher n'est pas une alerte

Une allergie parfaitement saisie dans un onglet que personne n'ouvre protège le patient exactement autant que pas de saisie du tout. Voici les quatre écrans où elle doit sortir seule :

1. **L'en-tête du dossier**, visible avant d'ouvrir le moindre onglet.
2. **L'écran de l'odontogramme**, là où l'on travaille et où se décide ce qu'on fait aujourd'hui.
3. **La prescription**, au moment de choisir la molécule.
4. **L'agenda**, avant que le patient franchisse la porte, tant qu'il reste le temps de préparer quelque chose.

![Fiche patient avec les alertes cliniques en rouge à côté de l'odontogramme, le plan de traitement actif et le prochain rendez-vous](/screenshots/dental-chart.png)

*L'alerte clinique épinglée dans la colonne de gauche, à côté de l'odontogramme. Rien à ouvrir pour la voir, et elle reste affichée quand on change d'onglet.*

## Qui la voit, et qui peut la modifier

Le RGPD range les données de santé en catégorie particulière. Son article 9.1 interdit de les traiter sauf si l'une des exceptions du 9.2 s'applique, et l'article 5.1.c ajoute la minimisation : adéquates, pertinentes et limitées à ce qui est nécessaire.

Cela n'empêche pas l'accueil de voir une alerte. Cela oblige à décider ce dont chaque rôle a besoin, et c'est rarement la même chose :

- **L'accueil** a besoin de savoir que ce rendez-vous demande une préparation, pas du diagnostic qui la motive.
- **Le fauteuil** a besoin de l'alerte complète.
- **Tout le monde** a besoin que la modification porte date, heure et auteur, parce que l'article 5.1.f exige des mesures techniques et organisationnelles appropriées, et supprimer une allergie sans laisser de trace n'en est pas une.

L'article 5.1.d fournit la moitié qu'on oublie : les données doivent être exactes et tenues à jour. Une allergie réfutée par un test se met à jour, elle ne reste pas là au cas où.

## Comment la tenir à jour

1. **Au premier rendez-vous, on la remplit entièrement**, y compris la mention "aucune connue" quand c'est la réponse.
2. **À chaque séance, on la confirme en une ligne.** Ce n'est pas refaire l'interrogatoire, c'est demander s'il y a un traitement ou un diagnostic nouveau.
3. **Avant de prescrire ou d'anesthésier, on la relit.** C'est le seul moment où l'alerte peut encore éviter le dommage.
4. **À l'arrivée d'un compte rendu, on met à jour la vérification et la date**, et on note d'où cela vient.
5. **À la relance d'un patient inactif, on la revoit entièrement.** Deux ans sans venir, c'est deux ans de traitements nouveaux.

## Où le logiciel aide, et où il n'aide pas

Aucun logiciel ne fait l'interrogatoire à votre place. Ce que le support décide, c'est si la réponse peut se ranger dans un champ avec un statut, une criticité et une date, ou si elle finit dans un paragraphe de texte libre, et sur quels écrans elle ressort seule sans que personne ait à penser à la regarder.

Dentalpin conserve allergies, médicaments, maladies systémiques et conditions particulières en champs séparés des antécédents médicaux, avec un niveau de criticité, et affiche les alertes en permanence à côté de l'odontogramme et dans l'en-tête du dossier. Les offres sont sur [tarifs](/fr/tarifs/).

Ceci n'est ni un conseil juridique ni une recommandation clinique. Les recommandations professionnelles applicables et le droit national du pays où exerce votre cabinet priment sur toute indication générale de cet article.

## Sources

- HL7 FHIR R4, ressource AllergyIntolerance (éléments type, category, criticality, clinicalStatus, verificationStatus et reaction.severity) : <https://hl7.org/fhir/R4/allergyintolerance.html> (consulté le 12 septembre 2026).
- NICE, recommandation clinique CG183, *Drug allergy: diagnosis and management*, recommandations sur la documentation du statut allergique. Texte intégral du National Clinical Guideline Centre : <https://www.ncbi.nlm.nih.gov/books/NBK274153/> (consulté le 12 septembre 2026).
- CDC, *Penicillin Allergy* : <https://www.cdc.gov/antibiotic-use/hcp/clinical-signs/index.html> (consulté le 12 septembre 2026).
- *2023 ESC Guidelines for the management of endocarditis*, European Heart Journal 44(39), p. 3948-4042 : <https://academic.oup.com/eurheartj/article/44/39/3948/7243107> (consulté le 12 septembre 2026).
- Règlement (UE) 2016/679 (RGPD), articles 5.1.c, 5.1.d, 5.1.f et 9.1. Texte officiel sur EUR-Lex : <https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32016R0679> (consulté le 12 septembre 2026).
