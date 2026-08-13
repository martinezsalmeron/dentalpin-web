---
title: "Odontogramme numérique : ce qu'il doit enregistrer et pourquoi"
description: "Ce qu'un odontogramme numérique doit stocker dent par dent, pourquoi l'historique compte plus que l'état du jour, et comment tester celui de votre logiciel."
pubDate: 2026-08-13
translationKey: odontograma-digital
tags: [odontogramme, dossier-clinique, cabinet-dentaire, logiciel-dentaire]
---

Un odontogramme numérique doit enregistrer, pour chaque dent et chaque face, ce qui a été constaté, ce qui a été fait, quand et par qui, dans une numérotation constante, et il ne doit jamais effacer ce qui précède. S'il montre seulement l'état de la bouche aujourd'hui, c'est un dessin, pas un dossier clinique.

Voici ce qui entre dans cet enregistrement, pourquoi l'historique pèse plus lourd que l'état actuel, et comment vérifier le vôtre en dix minutes.

## Un odontogramme n'est ni un parodontogramme ni un plan de traitement

Les trois se dessinent sur la même bouche et répondent à des questions différentes. Quand un seul écran veut tout faire, aucun des trois n'est à jour.

| | Odontogramme | Parodontogramme | Plan de traitement |
|---|---|---|---|
| Question posée | Ce que porte chaque dent et chaque face | Ce qui tient chaque dent | Ce que vous allez faire, et dans quel ordre |
| Unité d'enregistrement | Dent et face | Six sites par dent | Acte et phase |
| Quand il change | À chaque constat et à chaque soin | À chaque bilan parodontal | Au devis et à la réalisation |
| Ce qui manque sans lui | Impossible de dire l'état avant votre intervention | Impossible de montrer l'évolution osseuse | Ni séquence ni consentement traçable |

> **L'odontogramme constate, le plan propose.** Marquer sur l'odontogramme un acte qui n'est pas encore réalisé est le moyen le plus rapide de ne plus savoir, deux ans plus tard, ce qui a réellement été fait. Le prévu va au plan, le réalisé va à l'odontogramme avec sa date.

![Dossier d'un patient avec l'odontogramme, les alertes cliniques et le plan de traitement en cours](/screenshots/dental-chart.png)

*L'odontogramme au centre du dossier, avec les alertes médicales visibles sur le même écran.*

## L'unité minimale : dent, face, date, auteur

La numérotation utilisée presque partout est celle à deux chiffres de l'OMS et de la FDI : le premier chiffre désigne le quadrant, le second la dent. L'OMS la décrit dans *Oral health surveys: basic methods* et renvoie à la norme ISO 3950. C'est aussi de là que vient l'habitude de dicter chiffre par chiffre, "un-deux" pour la 12 et "trois-huit" pour la 38, parce qu'un nombre prononcé en entier s'entend mal au fauteuil.

| Donnée | Pourquoi elle compte | Doit-elle être obligatoire ? |
|---|---|---|
| Dent en notation à deux chiffres | Met fin à la "molaire en haut à droite" | ✓ Toujours |
| Face concernée | Distingue une reprise de carie d'une nouvelle lésion | ✓ Toujours |
| Constat et état | Carie, restauration, absence, fracture, traitement radiculaire | ✓ Toujours |
| Date du constat et date du soin | Ce sont deux dates, une seule est souvent stockée | ~ La plupart n'en gardent qu'une |
| Praticien qui saisit | Sans auteur, pas de responsabilité attribuable | ✓ Toujours |
| Motif de l'absence | Extraite, agénésie et non évoluée ne se valent pas | ✗ Rarement distingué |

Ces deux dernières lignes séparent un odontogramme clinique d'un gabarit de dessin. Une dent marquée absente sans motif ni date ne sert ni à planifier un implant ni à répondre à une réclamation.

## L'état du jour n'est pas l'historique

Un odontogramme qui s'écrase perd exactement l'information pour laquelle on revient vers vous. La question qui arrive des années plus tard ne porte jamais sur l'état actuel de la bouche, mais sur son état avant votre intervention.

C'est aussi ce que suppose la durée de conservation. Le référentiel de la CNIL pour la gestion des cabinets médicaux et paramédicaux prévoit que les données peuvent être conservées "pendant une durée de vingt ans à compter de la date de la dernière prise en charge du patient", dont "en base active, pendant une durée de cinq ans à compter de la dernière intervention sur le dossier du patient". Vingt ans d'un état actuel réécrit chaque année, ce n'est pas vingt ans de dossier.

> **Corriger n'est pas effacer.** Quand un constat part sur la mauvaise dent, la bonne réponse est une correction enregistrée, avec sa date et son auteur, et non un remplacement silencieux. Si le logiciel ne propose que le second, chaque correction détruit une preuve.

![Dossier patient sur l'onglet activité, avec la frise chronologique filtrable par visites, soins et communications](/screenshots/patient-timeline.png)

*Le même dossier vu comme une frise : chaque entrée garde sa date au lieu de se fondre dans l'état actuel.*

## Ce que cela implique au cabinet

- **Le délai survit au changement de logiciel.** Si vous migrez et que le nouveau programme n'importe que l'état final de chaque dent, vous avez gardé le schéma et perdu le dossier.
- **Le minimum réglementaire n'est pas le minimum clinique.** Un traitement radiculaire de 2019 reste pertinent en 2027, quelle que soit la durée retenue.
- **L'archivage n'est pas la sauvegarde.** Une base active de cinq ans ne dispense pas de pouvoir ressortir le dossier d'un patient parti il y a douze ans.

Ceci n'est pas un conseil juridique. La durée applicable à votre cabinet dépend de votre situation, et mérite d'être confirmée auprès de votre conseil ou de votre ordre professionnel.

## Ce qui rend un odontogramme inutilisable

- **On dessine sans dater.** Le schéma est impeccable et ne dit à aucun moment quand quelque chose s'est passé.
- **L'acte est saisi sur la dent voisine**, parce que celui qui dicte et celui qui clique n'utilisent pas la même numérotation. C'est l'erreur la plus coûteuse de la liste et la plus facile à éliminer.
- **Toutes les absences partagent un symbole.** Extraction, agénésie et dent incluse deviennent indiscernables.
- **Le constat ne pointe vers aucune radio.** L'image existe, dans un autre dossier, rattachée à rien.
- **Les corrections écrasent l'original.** Personne ne peut reconstituer ce qui a été vu à la première consultation.
- **Personne n'a jamais fait d'export.** Un odontogramme qui n'existe que dans le programme d'un éditeur est un otage, pas un enregistrement.

## Testez le vôtre en dix minutes

1. **Ouvrez un patient soigné il y a des années** et demandez au logiciel l'état de la 36 en 2023. Sans réponse possible, il n'y a pas d'historique.
2. **Modifiez un constat volontairement** et vérifiez que la modification est tracée, avec date et utilisateur, et que la valeur précédente reste consultable.
3. **Saisissez une carie sur la face occlusale** et vérifiez qu'elle est stockée comme une face, pas comme du texte libre.
4. **Marquez une dent absente** et cherchez où va le motif. Sans champ dédié, il finira en commentaire et ne sera jamais filtrable.
5. **Ouvrez la radio depuis la dent**, et non depuis la liste des images.
6. **Demandez un export complet** dans un format lisible sans le logiciel, et regardez si l'odontogramme sort avec ses dates ou aplati à l'état actuel.

L'étape 6 est celle que tout le monde repousse, et la seule qu'on ne peut plus faire le jour où elle devient urgente.

Chez Dentalpin, chaque constat est stocké avec sa dent, sa face, sa date et son auteur, l'historique reste lisible sur la frise du patient, et l'ensemble ressort en dump PostgreSQL standard quand vous le demandez. Ce que couvrent la version hébergée et l'auto-hébergement est sur [tarifs](/fr/tarifs/), et pour l'essayer sur vos propres cas, [l'installation prend trois minutes](/fr/blog/installer-dentalpin-en-trois-minutes/).

## Sources

- Organisation mondiale de la santé, *Oral health surveys: basic methods*, 5e édition, 2013, chapitre 5 et référence 18 (ISO 3950). [iris.who.int](https://iris.who.int/handle/10665/97035). Consulté le 13 août 2026.
- CNIL, *Référentiel relatif aux traitements de données à caractère personnel mis en œuvre à des fins de gestion des cabinets médicaux et paramédicaux*, point 7 (durées de conservation). [cnil.fr](https://www.cnil.fr/sites/default/files/atoms/files/referentiel_-_cabinet.pdf). Consulté le 13 août 2026.
