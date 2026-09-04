---
title: "Intégrer l'imagerie au logiciel dentaire : capteur, cone beam et scanner intraoral"
description: "Ce que veut vraiment dire intégration : worklist DICOM, où atterrit le cliché, pourquoi le scanner intraoral est un cas à part et quoi exiger par écrit."
pubDate: 2026-09-04
translationKey: integrar-radiologia-software-dental
tags: [imagerie, dicom, scanner-intraoral, interoperabilite, cabinet-dentaire]
---

Ce qui compte n'est pas que le logiciel sache afficher une image. Ce sont trois choses précises : le capteur reçoit le patient depuis le dossier clinique au lieu qu'on retape son nom, le cliché revient rattaché à ce patient et à cette séance, et vous pouvez l'exporter en DICOM quand vous voulez. Si la première manque, vous faites tourner deux fichiers patients dans le même cabinet.

Voici comment vérifier lequel des deux cas est le vôtre : le mécanisme qui règle la question, les quatre niveaux d'intégration vendus sous le même mot, et ce qui doit figurer par écrit avant la signature.

## Le problème n'est pas la visionneuse, ce sont deux fichiers patients

Presque tous les logiciels d'imagerie embarquent leur propre base patients. Quelqu'un l'a remplie la semaine où le capteur a été installé, et depuis elle vit à côté de celle du logiciel de gestion.

Les deux partent identiques et divergent toutes seules. Un nom composé saisi sans le trait d'union, une date de naissance tapée à neuf heures moins cinq, un patient créé d'un côté et pas de l'autre.

- **Des doublons apparaissent dans le logiciel d'imagerie**, et chacun emporte une partie de l'historique radiologique.
- **La justification de l'examen se perd.** Le cliché existe, mais il n'est pas accroché au rendez-vous qui l'a motivé.
- **Personne ne s'en aperçoit tant que le matériel ne change pas.** Cela se voit le jour où il faut remettre un dossier complet, ou le jour du changement de logiciel.

> **Le test rapide, ce sont les noms.** Ouvrez le logiciel d'imagerie et cherchez les trois patients les plus vus de l'année. Si l'un d'eux apparaît deux fois, ou orthographié autrement que dans le dossier, votre intégration est un bouton qui ouvre un autre programme.

![Dossier patient sur l'onglet des données personnelles, avec nom, coordonnées et informations administratives](/screenshots/patients.png)

*Le dossier d'où devraient venir le nom et la date de naissance enregistrés sur un cliché.*

## La liste de travail est le mécanisme qui règle la question

La norme derrière tout cela s'appelle DICOM, publiée par la NEMA. C'est aussi une norme ISO, l'ISO 12052, *Health informatics. Digital imaging and communication in medicine (DICOM) including workflow and data management*, et c'est la moitié *workflow* du titre que presque aucun cabinet dentaire n'utilise.

Le mécanisme s'appelle la DICOM Modality Worklist. L'ordre des chirurgiens-dentistes du Bade-Wurtemberg en détaille le déroulé dans sa note sur DICOM au cabinet dentaire, et il est le même à l'hôpital et dans un cabinet à deux fauteuils :

1. **L'examen est demandé depuis le logiciel de gestion**, le patient étant déjà identifié dans son dossier.
2. **Cette demande arrive dans une liste**, une par appareil ou une seule pour tous.
3. **L'appareil lit la liste sur sa propre console** et y prend les données du patient. Personne ne les ressaisit.
4. **L'examen est réalisé** et les images sont associées à ces données dans l'appareil lui-même.
5. **Les images partent vers l'archive** et la demande, marquée comme faite, disparaît de la liste.

L'étape trois supprime la faute de frappe, l'étape cinq fait apparaître le cliché tout seul dans le dossier. Un système qui ne fait que la cinq vous évite de chercher un fichier. Un système qui fait les deux supprime le second fichier patients.

## Quatre niveaux, un seul mot

"Intégré à votre radio" recouvre des réalités très différentes. Voici les quatre que l'on rencontre au cabinet, du plus faible au plus complet.

| Niveau | Ce qu'il fait réellement | Patient saisi deux fois | Le cliché revient au dossier |
|---|---|---|---|
| Un bouton qui ouvre la visionneuse | Lance l'autre programme | ✗ Oui | ✗ Non |
| Passage du patient | Transmet l'identifiant à l'ouverture | ✓ Non | ~ Selon le fabricant |
| Worklist et dépôt DICOM | Demande à l'aller, images au retour | ✓ Non | ✓ Oui |
| Services web DICOM | En plus, recherche et récupération par le web | ✓ Non | ✓ Oui |

Ce dernier niveau, c'est DICOMweb, que la norme elle-même présente comme "the DICOM Standard for web-based medical imaging" et décrit comme un ensemble de services REST. Sur une fiche technique, vous verrez QIDO-RS pour chercher, WADO-RS pour récupérer, STOW-RS pour déposer et UPS-RS pour les listes de travail.

> **Demandez le niveau par son nom, pas par l'adjectif.** "Compatible" et "connecté" ne veulent rien dire dans un devis. "Agit comme SCP Modality Worklist" et "accepte STOW-RS" veulent dire quelque chose, et les deux se vérifient avant de payer.

## Le scanner intraoral est un autre sujet

Un scanner intraoral ne produit pas des radios mais des maillages de surface, et ne les enregistre pas en DICOM par défaut. Il en sort les formats de maillage de la fabrication 3D, au premier rang desquels le STL et l'OBJ, et beaucoup de fabricants gardent le cas dans leur propre portail en ligne, avec son compte et sa liste de patients à lui.

La norme est allée les chercher. Le supplément 205 de DICOM "adds a new DICOM IOD to encapsulate Stereolithography (STL) 3D model file formats", et le 208 a fait de même pour l'OBJ, pour les bibliothèques de matériaux MTL et pour les textures en JPG ou PNG.

- **Demandez où réside le cas**, pas où il s'affiche. Si la réponse est le portail du fabricant du scanner, l'archive n'est pas dans votre cabinet.
- **Demandez si l'export emporte le lien vers le patient**, pas seulement les fichiers. Vingt mille maillages anonymes ne sont pas un dossier.
- **Demandez ce qui se passe le jour où vous arrêtez de payer le scanner.** C'est la question que tout le monde pose au sujet du logiciel de gestion et presque personne au sujet du portail du flux numérique.

> **Le maillage et la radio finissent à deux endroits différents, et le problème tient dans cette phrase.** Un patient avec un cone beam dans l'archive, des rétroalvéolaires dans un dossier du PC du fauteuil et une empreinte optique dans un portail web a trois dossiers, et celui qui a signé le consentement croit en avoir un.

![Dossier patient sur l'onglet activité, avec alertes cliniques, plan actif et une chronologie filtrable par séances, traitements, encaissements et communications](/screenshots/patient-timeline.png)

*La chronologie d'un patient, où l'on voit à quelle séance se rattache chaque examen.*

## Savoir en vingt minutes ce que vous avez aujourd'hui

Pas besoin d'un audit. Six vérifications suffisent, toutes sur un patient réel et aucune irréversible.

1. **Créez un nouveau patient dans le logiciel de gestion** et regardez s'il apparaît dans le logiciel d'imagerie sans que personne n'y touche.
2. **Lancez un cliché depuis l'appareil** et voyez si le patient est déjà renseigné ou s'il faut le chercher.
3. **Prenez une image puis revenez au dossier.** Comptez les secondes avant qu'elle n'apparaisse, et si elle n'apparaît pas, notez où elle se trouvait.
4. **Retrouvez le fichier sur le disque.** S'il est dans un dossier au nom du fabricant et que votre sauvegarde ne le couvre pas, vous tenez déjà un constat.
5. **Exportez ce cliché sur une clé et ouvrez-le sur un autre poste** où aucun logiciel du fabricant n'est installé.
6. **Refaites le point un avec le scanner intraoral**, celui qu'on oublie presque toujours.

Ce qui en ressort vaut mieux que n'importe quelle plaquette, parce que cela décrit votre cabinet. Si le point quatre vous laisse mal à l'aise, le guide sur le [stockage des radiographies](/fr/blog/stockage-radiographies-dentaires/) traite du format et de l'archive.

## Ce qui doit figurer par écrit

Tout cela se négocie avant la signature et pas après, et tient en cinq lignes d'un courriel.

- **Le DICOM conformance statement de l'appareil et celui du logiciel.** La partie PS3.2 de la norme oblige chaque fabricant à publier ce qu'il met réellement en œuvre : le document existe, demandez-le.
- **Si le logiciel se comporte en serveur de liste de travail**, et avec quels appareils il a été testé, noms et versions à l'appui.
- **Où sont stockés les fichiers d'image**, sur quel chemin ou dans quel service, et s'ils entrent dans la même sauvegarde que le reste.
- **Comment tout sort**, en DICOM et avec le lien patient et date dans un fichier lisible, démontré tout de suite sur dix patients.
- **Ce que coûte chaque passerelle.** Les liaisons vers un appareil précis se facturent à part plus souvent que la démonstration ne le laisse croire, et cette question figure aussi dans la liste des [questions à poser avant de signer](/fr/blog/questions-avant-de-signer-logiciel-dentaire/).

Chez Dentalpin, les images sont enregistrées rattachées au dossier clinique et dans le système de fichiers de votre propre serveur : elles entrent donc dans la même sauvegarde que le reste et vous pouvez les emporter. Les conditions sont sur [tarifs](/fr/tarifs/).

## Sources

- DICOM, édition en vigueur et liste des parties (PS3.2 Conformance, PS3.4 Service Class Specifications, PS3.10 Media Storage and File Format, PS3.18 Web Services). [dicomstandard.org/current](https://www.dicomstandard.org/current). Consulté le 4 septembre 2026.
- DICOMweb, définition et services QIDO-RS, WADO-RS, STOW-RS et UPS-RS. [dicomstandard.org/using/dicomweb](https://www.dicomstandard.org/using/dicomweb). Consulté le 4 septembre 2026.
- DICOM Supplement 205, *Encapsulation of STL Models for 3D Manufacturing*, DICOM Standards Committee WG-17. [sup205.pdf](https://www.dicomstandard.org/News-dir/ftsup/docs/sups/sup205.pdf). Consulté le 4 septembre 2026.
- DICOM Supplement 208, *Extension of DICOM Encapsulation of Models for 3D Manufacturing* (OBJ, MTL, textures). [sup208.pdf](https://www.dicomstandard.org/news-dir/progress/docs/sups/sup208.pdf). Consulté le 4 septembre 2026.
- ISO 12052, *Health informatics. Digital imaging and communication in medicine (DICOM) including workflow and data management*. [iso.org](https://www.iso.org/standard/72941.html). Consulté le 4 septembre 2026.
- Landeszahnärztekammer Baden-Württemberg, *Bildgebende Verfahren. DICOM in der Zahnarztpraxis*, 09/2019, description du déroulé de la DICOM Modality Worklist. [lzk-bw.de](https://lzk-bw.de/fileadmin/user_upload/Downloads/Rund_um_die_Praxisf%C3%BChrung/Bildgebende_Verfahren_DICOM_Zahnarztpraxis.pdf). Consulté le 4 septembre 2026.
