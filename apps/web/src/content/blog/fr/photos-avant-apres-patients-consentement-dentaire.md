---
title: "Publier l'avant/après : pourquoi le consentement aux soins ne suffit pas"
description: "En France le patient ne peut pas délier son praticien du secret professionnel. Ce que l'Ordre exige pour une photo avant/après, et ce qu'il faut tracer."
pubDate: 2026-10-06
translationKey: fotos-antes-y-despues-pacientes-consentimiento
tags: [rgpd, secret-professionnel, photographie-clinique, communication]
---

En France, la question ne se règle pas avec une signature. Le consentement aux soins n'autorise pas la publication, et l'autorisation expresse du patient ne suffit pas non plus : le secret professionnel est un principe à valeur absolue dont le patient ne peut pas délier son praticien. L'Ordre national des chirurgiens-dentistes l'écrit noir sur blanc, et il ajoute que le visage doit être flouté même si le patient demande le contraire.

Ceci n'est pas un conseil juridique. C'est la lecture des sources officielles citées en fin d'article, consultées le 6 octobre 2026.

## Le décret de 2020 a assoupli la communication, pas le secret

Le décret n° 2020-1658 du 22 décembre 2020, publié au Journal officiel le 24 décembre 2020, a modifié le code de déontologie et mis fin à l'interdiction générale de la publicité. Il confie au Conseil national de l'ordre la mission d'émettre des recommandations, adoptées en session du 6 mai 2021 puis modifiées les 9 décembre 2021 et 24 mars 2023.

Ces recommandations portent sur six articles du code de la santé publique, dont l'article R.4127-215-1. Elles disent deux choses sur les photographies de patients, et ce sont deux choses différentes.

- **Une photo avant/après est une information potentiellement trompeuse.** Les recommandations citent, parmi les exemples qui pourraient ne pas respecter l'obligation d'objectivité, *"des photographies « avant/après traitement » [qui] tendraient à suggérer dans l'esprit des patients un résultat positif certain"*.
- **Le secret professionnel reste intact.** Et sur ce point, le texte est plus strict que ce que la plupart des cabinets imaginent.

## La phrase qui change tout

Les recommandations ordinales l'écrivent ainsi : le respect du secret professionnel *"reste un principe à valeur absolue dont le patient ne peut délier le praticien"*. Puis elles en tirent la conséquence pratique, sans ambiguïté :

*"Dès lors qu'un patient est filmé au sein d'un cabinet dentaire, il ne doit en aucun cas être identifiable. Son visage doit être flouté même si le patient souhaite donner une autorisation expresse de diffusion de son image."*

> **C'est l'inverse du réflexe habituel.** Faire signer une autorisation ne règle pas la question en France : elle ne rend pas le patient identifiable publiquement, parce que ce n'est pas au patient de lever le secret. L'autorisation reste nécessaire pour sa participation, elle n'est jamais suffisante pour son visage.

Les recommandations citent d'ailleurs comme exemple de manquement le fait de *"poster des radiographies, des photographies, des copies d'écrans… portant l'identification des patients, ou permettant de les reconnaître sur les réseaux sociaux"*. Une radiographie compte. Une capture d'écran du logiciel compte.

| Document | Autorise l'acte | Autorise la conservation au dossier | Autorise la diffusion publique |
|---|---|---|---|
| Consentement aux soins | ✓ Oui | ~ Pour ce qui est utile aux soins | ✗ Non |
| Autorisation de photographie clinique | ✓ Oui | ✓ Oui | ✗ Non |
| Autorisation expresse de diffusion d'image | ✓ Oui | ✓ Oui | ~ Oui, et seulement sur une image non identifiante |

![Dossier patient, onglet des informations personnelles avec les données d'identification et le bloc d'information médicale](/screenshots/patients.png)

*Le dossier où l'autorisation doit vivre : un document rangé ailleurs est un document que personne ne retrouve le jour où le patient le retire.*

## Flouter n'est pas anonymiser

C'est la confusion la plus coûteuse. Une image clinique est une donnée de santé au sens de l'article 9 du RGPD précisément parce qu'elle révèle qu'une personne a été soignée, et l'identification ne tient pas seulement au visage.

Un diastème, un encombrement particulier, un bijou, un tatouage sur la lèvre, une date de publication rapprochée d'un rendez-vous : chacun de ces éléments réduit le cercle. Les recommandations ordinales demandent que *"tout élément permettant de l'identifier"* soit proscrit, ce qui est une exigence plus large que le floutage du visage.

> **Le recadrage intra-oral n'est pas neutre non plus.** Associé au nom du cabinet et à la description du traitement, il reste identifiable par l'entourage du patient, et c'est précisément cet entourage qui pose problème.

## Ce qu'une autorisation de diffusion doit contenir

Elle ne remplace pas le floutage, elle s'y ajoute. Et elle doit être écrite, distincte du consentement aux soins, et précise.

1. **La finalité**, dite en clair : promotion de l'activité du cabinet, pas "fins de communication".
2. **Les supports**, un par un : site internet, Instagram, Facebook, TikTok, imprimés, campagnes payantes.
3. **Les images concernées**, identifiées par date ou par référence, pas "les photographies de mon traitement".
4. **La durée**, avec une date de fin et ce qui se passe à l'échéance.
5. **Les tiers destinataires.** Une agence qui gère les réseaux est un sous-traitant et exige son [contrat](/fr/blog/sous-traitance-rgpd-logiciel-dentaire/).
6. **Les modalités de retrait**, avec un canal nommé et un délai, le consentement étant révocable à tout moment.
7. **Ce que le retrait ne change pas.** Les soins ne dépendent pas de cette signature, et le document gagne à le dire.

Le point 6 est celui qui échoue en pratique. Supprimer la publication de son propre compte est la partie facile ; l'image a déjà été repartagée, enregistrée et indexée, et un retrait qu'on ne peut pas exécuter n'était pas vraiment une autorisation.

## Ce que le logiciel doit savoir faire

![Dossier patient avec l'onglet d'activité : alertes cliniques, plan de traitement actif et chronologie filtrable par visites, actes, mouvements financiers et communications](/screenshots/patient-timeline.png)

*La chronologie du patient : une autorisation et son retrait sont deux faits datés, et c'est ici qu'ils se lisent dans l'ordre.*

Quatre exigences concrètes en découlent :

- **Conserver l'autorisation de diffusion comme un document propre et versionné**, distinct du consentement aux soins. Une case "oui/non" ne dit ni ce qui a été signé ni quand.
- **Y inscrire la finalité et les supports**, puisque c'est ce qui délimite l'autorisation et ce qu'il faudra produire.
- **La rattacher à l'image précise**, pas au patient. Une autorisation de 2024 ne couvre pas une photo de 2026.
- **Faire propager le retrait.** Cela suppose que le dossier sache où chaque image a été publiée, sinon personne ne peut la retirer partout.

Il faut y ajouter une cinquième exigence, propre à la règle française : conserver le fichier original non flouté au dossier et ne diffuser que la version traitée, les deux avec leur date. Et tracer chaque accès aux images cliniques comme on trace l'accès au [dossier](/fr/blog/journal-acces-dossier-patient/).

Dans Dentalpin, les consentements vivent dans le dossier patient, chaque enregistrement conserve son auteur et sa date, la chronologie montre quand le patient a été informé et quand il a signé, et les images sont rattachées au dossier avec les mêmes droits et le même journal d'accès que le reste. Le code est ouvert, donc cela s'audite au lieu de se croire, et les [tarifs sont publiés](/fr/tarifs/).

## Sources

- Conseil national de l'ordre des chirurgiens-dentistes, "Communication professionnelle des chirurgiens-dentistes : recommandations et explicitations", version du 19 juin 2026 : [ordre-chirurgiens-dentistes.fr](https://www.ordre-chirurgiens-dentistes.fr/pour-le-chirurgien-dentiste/communication-professionnelle-des-chirurgiens-dentistes/). Consulté le 6 octobre 2026.
- Décret n° 2020-1658 du 22 décembre 2020 portant modification du code de déontologie des chirurgiens-dentistes et relatif à leur communication professionnelle, publié au Journal officiel le 24 décembre 2020. Référence et portée telles qu'énoncées par le Conseil national de l'ordre dans le document ci-dessus.
- Règlement (UE) 2016/679 (RGPD), articles 6 et 9 : [eur-lex.europa.eu](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consulté le 6 octobre 2026.
- CNIL, "RGPD et professionnels de santé libéraux : ce que vous devez savoir" : [cnil.fr](https://www.cnil.fr/fr/rgpd-et-professionnels-de-sante-liberaux-ce-que-vous-devez-savoir). Consulté le 6 octobre 2026.
