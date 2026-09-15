---
title: "Rétrocession d'honoraires au cabinet dentaire : le calcul que le logiciel doit tenir"
description: "Comment se calcule la rétrocession d'un collaborateur dentaire : attribution des actes, déductions avant le pourcentage, facturé ou encaissé, relevé mensuel."
pubDate: 2026-09-15
translationKey: liquidacion-doctores-colaboradores
tags: [retrocession, collaborateur, gestion, facturation]
---

Une rétrocession d'honoraires est un pourcentage appliqué à une assiette, et presque toutes les discussions qui finissent mal portent sur l'assiette, pas sur le pourcentage. Quatre décisions la définissent : quel acte est attribué à quel praticien, ce qui se déduit avant d'appliquer le pourcentage, si le calcul porte sur les honoraires facturés ou sur les honoraires encaissés, et comment se partage un acte que deux praticiens ont réalisé.

Si le logiciel ne sait pas répondre à ces quatre questions ligne par ligne, le relevé mensuel n'est pas vérifiable. Et un relevé invérifiable se rediscute tous les mois.

## Le pourcentage est la dernière chose à négocier

Deux contrats affichant des pourcentages différents peuvent aboutir à des montants très différents, et le chiffre le plus élevé ne gagne pas toujours. Prenons un acte facturé 1 000 € avec 300 € de prothèse.

- **Une rétrocession de 30 % sur les honoraires bruts** représente 1 000 × 0,30 = **300 €** versés au titulaire.
- **Une rétrocession de 35 % sur une assiette nette de prothèse** représente (1 000 − 300) × 0,35 = **245 €**.

Le contrat affichant 35 % coûte 55 € de moins au collaborateur sur cet acte. Ce n'est pas un cas tordu : en prothèse, en implantologie et en orthodontie, le laboratoire pèse lourd dans la facture, et l'assiette efface alors n'importe quel écart raisonnable de pourcentage.

> **Le pourcentage le plus élevé n'est pas toujours le plus coûteux.** Avant de discuter 30 ou 35, il faut écrire noir sur blanc sur quel montant il s'applique, puis vérifier que le logiciel sait produire ce montant sans ressaisie.

## Le praticien se range sur la ligne d'acte, pas sur le patient

L'attribution échoue presque toujours pour la même raison : le logiciel range le praticien au mauvais endroit. Si l'information vit dans la fiche patient sous forme de praticien référent, ou dans le rendez-vous, le calcul dérape dès qu'un remplacement a lieu, qu'une urgence arrive ou que l'assistante dentaire prend en charge une phase du plan.

Le praticien doit être un champ de la ligne d'acte, à côté du code et du montant. Trois questions à poser avant de signer quoi que ce soit :

- **Chaque ligne peut-elle être attribuée séparément ?** Un devis de neuf lignes peut concerner trois praticiens, et c'est le cas courant, pas l'exception.
- **La valeur par défaut est-elle celui qui a soigné ou celui qui suit le patient ?** La seconde est confortable et produit exactement les relevés faux.
- **Un changement d'attribution est-il tracé, avec qui et quand ?** Sans journal, une correction légitime ressemble à un déplacement d'argent, et c'est ce qui empoisonne la relation.

![Plan de traitement présenté par étapes, avec les actes de chaque étape](/screenshots/treatment-plan.png)

*Un plan de traitement découpé en étapes, chacune regroupant des actes réalisables lors de séances différentes.*

## Ce qui se déduit avant d'appliquer le pourcentage

C'est ici que les contrats deviennent flous. "Déduction faite des frais de laboratoire" paraît clair jusqu'à la première facture de laboratoire qui comporte un pilier implantaire, ou jusqu'à la première remise accordée à l'accueil.

| Poste | Assiette brute | Nette de laboratoire | Nette de laboratoire et de matériel |
|---|---|---|---|
| Prothèses de laboratoire | ✗ Non déduit | ✓ Déduit | ✓ Déduit |
| Implants et gouttières | ✗ Non déduit | ~ Selon la facturation du fournisseur | ✓ Déduit |
| Petit matériel et consommables | ✗ Non déduit | ✗ Non déduit | ✓ Déduit selon une règle écrite |
| Remises accordées au patient | ~ À convenir | ~ À convenir | ~ À convenir |
| Frais bancaires sur encaissement | ~ À convenir | ~ À convenir | ~ À convenir |

Deux détails que presque personne n'écrit et qui changent le résultat chaque mois. Le premier : les montants déduits le sont-ils TTC ou HT. Une facture de laboratoire de 300 € HT ne produit pas la même déduction qu'une facture de 300 € TTC.

Le second : qui supporte les remises accordées au patient. Si l'accueil conclut un devis avec 10 % de remise pour paiement comptant, ces 10 % peuvent peser entièrement sur le cabinet, entièrement sur le collaborateur, ou se partager. Les trois options se défendent. La seule qui ne se défend pas est de ne pas avoir tranché.

## Honoraires facturés ou honoraires encaissés ?

C'est la décision qui déplace le plus d'argent et qui exige le plus du logiciel. Elle détermine qui porte le risque d'impayé et à quel moment la rétrocession est due.

| | Sur le facturé | Sur l'encaissé | Mixte |
|---|---|---|---|
| Moment du calcul | ✓ À l'émission de la facture | ✗ Au fil des encaissements | ~ À la facture, puis régularisation |
| Qui porte l'impayé | ✗ Un seul des deux | ✓ Partagé | ~ Régularisé après coup |
| Ce que le logiciel doit savoir faire | ~ Attribution par ligne | ✗ En plus, affecter les règlements aux lignes | ✗ Les deux, plus un historique |
| Facilité de vérification | ✓ Élevée | ~ Moyenne | ✗ Faible |

Le calcul sur l'encaissé paraît plus juste et casse davantage de logiciels. Pour l'appliquer, chaque règlement partiel doit savoir quelles lignes d'actes il solde, ce qui n'est pas la même chose que connaître le solde global du patient.

> **Un plan à 3 000 € réglé en douze mensualités, réalisé par deux praticiens, est le cas d'école.** Si le logiciel sait que 250 € sont arrivés ce mois-ci sans savoir à quels actes les affecter, le modèle sur l'encaissé devient incalculable et finit dans un tableur à côté.

![Liste de factures avec les états émise, réglée, partiellement réglée, échue et brouillon](/screenshots/invoices.png)

*Une liste de factures où chaque ligne porte son état de règlement, ce qui sépare le réglé du partiellement réglé et de l'échu.*

## Un acte réalisé par deux praticiens

Cela arrive plus souvent qu'on ne le croit : une endodontie adressée en interne, une chirurgie implantaire posée par l'un et restaurée par l'autre, une orthodontie suivie par un spécialiste présent deux jours par mois. Une seule ligne de facture, le travail de deux personnes.

1. **Fixer la règle avant le cas, pas après.** Attribuer à celui qui termine, répartir par séance, ou répartir selon un pourcentage fixe par type d'acte : trois règles valables. Improviser au cas par cas n'en est pas une.
2. **Vérifier si le logiciel sait scinder une ligne.** S'il ne permet pas deux praticiens et deux quotes-parts sur un même acte, la solution propre consiste à facturer la chirurgie et la prothèse séparément.
3. **Enregistrer la séance, pas seulement l'acte.** Si chaque séance porte son praticien, la répartition par séance se calcule seule et cesse d'être une négociation.
4. **Écrire le cas pénible dans le contrat.** Ce qui se passe quand un collaborateur part au milieu d'un plan long est la clause que personne ne rédige et dont tout le monde finit par avoir besoin.

## Ce que le relevé mensuel doit montrer

La preuve qu'un relevé est bien fait, c'est que le praticien puisse le reconstituer depuis ses propres actes sans rien demander à personne. Chaque ligne doit donc porter :

1. **La date et le patient**, avec un identifiant permettant d'ouvrir le dossier clinique.
2. **L'acte et son code**, tels qu'ils figurent sur le devis accepté.
3. **Le praticien attribué**, et en cas de partage, la quote-part de chacun.
4. **Le montant facturé**, avant remise.
5. **Les remises appliquées**, avec leur motif plutôt qu'un montant global.
6. **Le montant encaissé sur la période**, si le contrat porte sur l'encaissé.
7. **Les déductions**, chacune avec son libellé et la pièce d'origine.
8. **L'assiette, le pourcentage et le montant dû**, en trois colonnes distinctes.

En dessous, trois éléments qui manquent souvent : le total par praticien, une rubrique de régularisations des périodes antérieures (un impayé récupéré, un avoir émis) et un chiffre qui se rapproche de la caisse de la période. Sans cette dernière ligne, le relevé n'est qu'une affirmation.

> **Si le relevé ne peut pas être recalculé à partir des actes, ce n'est pas un calcul, c'est un chiffre.** Le test pratique : donnez-le à quelqu'un qui ne l'a pas produit et demandez-lui d'arriver au même total. S'il n'y parvient pas, le problème vient du rapport, pas de la personne.

## Cet article ne vous dira pas quel pourcentage retenir

Il ne le dira pas parce qu'aucune source officielle ne le publie. Les chiffres qui circulent viennent de cabinets de conseil et de la presse professionnelle, se citent entre eux et vieillissent sans que personne ne les revoie.

Ce qui peut être affirmé, en revanche, c'est que comparer deux pourcentages sans comparer leurs assiettes ne signifie rien, et que le cabinet d'à côté n'est pas une référence utile tant qu'on ignore ce qu'il déduit avant.

## En France, la rétrocession pose une question de TVA

La rétrocession versée par le collaborateur au titulaire n'est pas un poste neutre au regard de la TVA, et l'Ordre National des Chirurgiens-Dentistes publie régulièrement sur le sujet. Son actualité du 29 septembre 2020 l'écrivait ainsi : "Lorsque la rétrocession est supérieure à 34 400 €, la TVA (dont le taux de 20 % ne change pas) s'applique."

Les seuils ont bougé depuis, et c'est précisément pour cela qu'il faut les relire chaque année plutôt que de reprendre un chiffre d'archive. L'Ordre indiquait dans son actualité du 19 février 2024 un seuil porté à 36 800 € hors taxe. Le BOFiP, dans sa version du 1er juillet 2026, retient pour les prestations de services un seuil de **37 500 €** pour l'année civile précédente et un seuil majoré de **41 250 €** en cours d'année, au titre de l'article 293 B du code général des impôts.

La conséquence pour le logiciel est très concrète. Le titulaire doit pouvoir sortir, à tout moment, le cumul des rétrocessions perçues sur l'année civile en cours, tous collaborateurs confondus. C'est ce cumul, et non le chiffre d'affaires du cabinet, qui indique si le seuil approche.

Un franchissement passé inaperçu se découvre en général au bilan, quand la régularisation coûte bien plus que les cinq minutes qu'aurait pris le suivi mensuel du cumul. C'est le genre de chiffre qui mérite une ligne dans le tableau de bord du cabinet plutôt qu'un calcul annuel.

La qualification de la relation, la rédaction du contrat de collaboration libérale et le traitement fiscal exact relèvent de votre expert-comptable et des textes officiels. **Cet article ne constitue pas un conseil juridique ou fiscal.**

## Ce qu'il faut exiger du logiciel

En une phrase : que le praticien soit une donnée de la ligne d'acte, que les règlements soient affectés aux lignes, et que le relevé mensuel soit recalculable à partir des données. Avec ces trois éléments, n'importe quel accord raisonnable se liquide ; sans eux, aucun accord ne se vérifie.

Dans Dentalpin, l'attribution vit sur la ligne d'acte et les règlements sont affectés aux lignes qu'ils soldent, ce qui rend calculable une rétrocession sur l'encaissé sans tableur à côté. Tout est inclus, sans coût par utilisateur : le détail est sur la [page tarifs](/fr/tarifs/).

## Sources

- Ordre National des Chirurgiens-Dentistes, *Rétrocessions du collaborateur au titulaire : nouveaux seuils de franchise TVA*, 29 septembre 2020. Consulté le 15 septembre 2026. <https://www.ordre-chirurgiens-dentistes.fr/actualites/retrocessions-du-collaborateur-au-titulaire-nouveaux-seuils-de-franchise-tva/>
- Ordre National des Chirurgiens-Dentistes, *Rétrocession de TVA*, 19 février 2024. Consulté le 15 septembre 2026. <https://www.ordre-chirurgiens-dentistes.fr/actualites/retrocession-de-tva/>
- BOFiP, *BOI-TVA-DECLA-40-10-10*, franchise en base de droit commun, version du 1er juillet 2026. Consulté le 15 septembre 2026. <https://bofip.impots.gouv.fr/bofip/849-PGP.html/identifiant=BOI-TVA-DECLA-40-10-10-20260701>
