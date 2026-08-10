---
title: "Sauvegardes au cabinet dentaire : quoi enregistrer et à quelle fréquence"
description: "Ce qui doit entrer dans la sauvegarde d'un cabinet dentaire, à quelle fréquence la lancer, où stocker les copies et comment prouver qu'une restauration fonctionne."
pubDate: 2026-08-10
translationKey: copias-seguridad-clinica-dental
tags: [sauvegarde, securite, rgpd, cabinet-dentaire]
---

Sauvegardez la base de données et les fichiers joints tous les jours, gardez trois copies sur deux supports différents dont une hors du cabinet, et restaurez l'une de ces copies au moins une fois par an pour vérifier qu'elle fonctionne. Si personne n'a jamais restauré, vous n'avez pas de sauvegarde. Vous avez un fichier dont vous supposez qu'il est bon.

Voici ce qui doit entrer dans cette copie, à quelle fréquence elle a du sens, et comment la vérifier sans dépendre de ce qu'on vous dit au téléphone.

## Ce qui entre dans la sauvegarde, et ce qui reste dehors

Un cabinet dentaire ne range pas ses données à un seul endroit, il les range à deux. La base de données contient les patients, l'agenda, l'odontogramme, les plans de traitement, les devis et les factures. Les radiographies, les PDF signés et les documents scannés vivent sous forme de fichiers, souvent dans un autre dossier ou un autre service.

Une sauvegarde qui ne couvre que la base paraît complète jusqu'au jour où vous la restaurez et où les radios manquent.

| Quoi sauvegarder | Pourquoi c'est important | Inclus par défaut ? |
|---|---|---|
| Base de données | Patients, agenda, odontogramme, devis, facturation | ✓ Presque toujours |
| Radiographies et images cliniques | Elles font partie du dossier et occupent presque tout l'espace | ✗ Souvent exclues à cause de leur taille |
| Consentements et documents signés | C'est la preuve que le consentement a été recueilli | ~ Selon l'endroit où le logiciel les stocke |
| Configuration du système | Sans elle, la restauration prend des heures de plus | ✗ Rarement |
| Clés et certificats de facturation | Sans eux, impossible d'émettre à nouveau | ✗ Rarement |

> **Regardez la taille de la sauvegarde avant de lui faire confiance.** Cinq ans de radiographies ne tiennent pas dans une archive de 200 Mo. Si la copie de cette nuit pèse beaucoup moins que vos données, quelque chose est laissé de côté, et vous savez déjà quoi.

![Dossier clinique d'un patient avec l'odontogramme, les alertes cliniques et le plan de traitement en cours](/screenshots/dental-chart.png)

*Voilà ce qu'une restauration doit rendre intact, pas seulement la liste des patients.*

## À quelle fréquence : la vraie question, c'est ce que vous pouvez perdre

La fréquence ne se décide pas par habitude, elle se décide par la quantité de travail que vous acceptez de refaire. Entre la dernière sauvegarde et la panne il y a un trou, et quelqu'un le comble à la main, de mémoire.

| Fréquence | Perte dans le pire des cas | À qui cela convient |
|---|---|---|
| Hebdomadaire | Jusqu'à six jours de dossiers et d'encaissements | ✗ Insuffisant pour un cabinet en activité |
| Quotidienne, la nuit | Une journée de travail | ~ Le minimum raisonnable |
| Toutes les quelques heures | Une demi-matinée | ✓ Cabinets à plusieurs fauteuils et fort volume |
| Continue | Quelques minutes | ✓ Si l'éditeur la propose sans travail en plus |

Chiffrez ce trou. Fauteuils multipliés par heures multipliés par production moyenne, c'est le calcul qui transforme cette décision en comparaison économique plutôt qu'en affaire de goût.

## La règle 3-2-1, et pourquoi la copie dans la même pièce ne compte pas

La CISA, l'agence américaine de cybersécurité, résume la pratique admise en trois chiffres : trois copies de chaque fichier important (une principale et deux sauvegardes), sur deux supports différents, dont une copie conservée hors du site.

- **Trois copies**, parce que la deuxième tombe aussi. Un disque de sauvegarde acheté le même jour que l'original meurt souvent à la même époque.
- **Deux supports différents**, parce qu'un même mode de défaillance emporte deux appareils identiques d'un coup, du bug de firmware à la surtension.
- **Une copie hors du cabinet**, parce qu'un vol, un incendie ou un dégât des eaux emportent ensemble le serveur et le disque USB du tiroir d'à côté.
- **Une copie hors ligne ou immuable**, parce qu'un rançongiciel chiffre tout ce que la machine infectée peut écrire, y compris le disque de sauvegarde qui reste branché en permanence.

| | Disque USB au cabinet | NAS au cabinet | Copie chiffrée à l'extérieur |
|---|---|---|---|
| Panne du disque principal | ✓ Couvre | ✓ Couvre | ✓ Couvre |
| Vol ou incendie | ✗ Perdu avec l'original | ✗ Perdu avec l'original | ✓ Couvre |
| Rançongiciel | ~ Seulement s'il était débranché | ✗ Chiffré lui aussi le plus souvent | ✓ Si elle est immuable ou versionnée |
| Travail mensuel exigé | Changer et sortir le disque | Vérifier qu'il tourne toujours | ✓ Aucun une fois automatisée |

## Ce que le RGPD demande, et ce que la CNIL recommande

Le RGPD ne parle pas de disques, il parle de rétablissement. L'article 32, paragraphe 1, point c) exige "des moyens permettant de rétablir la disponibilité des données à caractère personnel et l'accès à celles-ci dans des délais appropriés en cas d'incident". Le point d) exige "une procédure visant à tester, à analyser et à évaluer régulièrement l'efficacité des mesures techniques et organisationnelles". Une sauvegarde que personne n'a testée échoue aux deux.

Sur la durée de conservation, le référentiel de la CNIL pour la gestion des cabinets médicaux et paramédicaux retient vingt ans à compter de la dernière prise en charge du patient : cinq ans en base active à compter de la dernière intervention sur le dossier, puis quinze ans sous forme archivée sur un support distinct, dans des conditions de sécurité équivalentes.

> **La CNIL précise elle-même que ces durées sont recommandées et ne revêtent pas un caractère obligatoire.** Elles restent le repère le plus solide dont dispose un cabinet libéral, et votre dispositif de sauvegarde doit tenir sur cette échelle, pas sur celle d'un disque que vous remplacez tous les trois ans.

![Liste de factures avec les états émise, payée, partiellement payée, échue et brouillon](/screenshots/invoices.png)

*La facturation a ses propres règles de conservation et doit survivre elle aussi à la restauration.*

## L'exercice de restauration, étape par étape

Une demi-heure par an, et c'est la seule chose qui distingue une sauvegarde d'un dossier rempli de gros fichiers.

1. **Prenez une copie au hasard**, pas celle de cette nuit. Celle d'il y a trois semaines en dit bien plus sur la solidité du processus.
2. **Restaurez-la sur une autre machine ou un autre serveur**, jamais par-dessus le système en production.
3. **Chronométrez** du début jusqu'au moment où l'agenda de demain s'ouvre. Ce chiffre est votre temps réel de reprise et il surprend presque toujours.
4. **Ouvrez trois patients précis** et vérifiez que l'odontogramme, les radiographies et le dernier devis sont bien là.
5. **Contrôlez la facturation du dernier trimestre**, la partie que personne ne regarde tant qu'elle ne manque pas.
6. **Notez la date, la durée et qui l'a fait.** Ce relevé est aussi votre preuve de diligence au titre de l'article 32.

## Les défauts qui réduisent une sauvegarde à néant

- **Personne ne lit les alertes.** Une tâche en échec depuis onze semaines envoie un message chaque nuit vers une boîte que plus personne n'ouvre.
- **La copie est sur la même machine**, dans un autre dossier ou une autre partition. Cela protège d'une suppression accidentelle et de rien d'autre.
- **Le disque de sauvegarde reste branché**, donc le rançongiciel le chiffre avec le reste.
- **La copie n'est pas chiffrée.** Un disque perdu contenant les dossiers de tout le cabinet est une violation de données à notifier, pas un contretemps.
- **Seul le prestataire informatique qui l'a installée sait restaurer**, et il n'est plus là. Écrivez la procédure et gardez-la hors du système à restaurer.
- **La sauvegarde appartient à l'éditeur et personne n'a jamais demandé d'export.** Si l'éditeur disparaît, la copie disparaît avec lui.

Chez Dentalpin, la sauvegarde est un dump PostgreSQL standard plus le répertoire de fichiers, donc vous l'automatisez avec les outils que vous utilisez déjà et vous la restaurez sans nous demander quoi que ce soit. Ce que couvrent la version hébergée et l'auto-hébergement est sur [tarifs](/fr/tarifs/), et pour répéter une restauration avant de vous engager, [l'installation prend trois minutes](/fr/blog/installer-dentalpin-en-trois-minutes/).

## Sources

- Règlement (UE) 2016/679 (RGPD), article 32. [CNIL, texte du règlement](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4). Consulté le 10 août 2026.
- CNIL, *Référentiel relatif aux traitements de données à caractère personnel destinés à la gestion des cabinets médicaux et paramédicaux*. [cnil.fr](https://www.cnil.fr/sites/default/files/atoms/files/referentiel_-_cabinet.pdf). Consulté le 10 août 2026.
- CISA, *Back Up Your Business Data*. [cisa.gov](https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/back-up-business-data). Consulté le 10 août 2026.

Ceci n'est pas un conseil juridique. Les durées de conservation applicables à votre cabinet dépendent de votre situation, et méritent d'être confirmées auprès de votre conseil ou de votre ordre professionnel.
