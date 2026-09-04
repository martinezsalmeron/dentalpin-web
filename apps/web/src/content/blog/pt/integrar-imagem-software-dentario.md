---
title: "Integrar radiologia e scanner intraoral com o software da clínica"
description: "O que significa mesmo integração: worklist DICOM, onde fica a radiografia, porque o scanner intraoral é um caso à parte e o que exigir por escrito antes de assinar."
pubDate: 2026-09-04
translationKey: integrar-radiologia-software-dental
tags: [radiologia, dicom, scanner-intraoral, integracao, gestao-clinica]
---

A integração que interessa não é o software conseguir mostrar uma imagem. São três coisas concretas: o equipamento recebe o doente a partir do histórico clínico em vez de alguém voltar a escrever o nome, a imagem regressa ligada a esse doente e a essa consulta, e consegue exportá-la em DICOM quando quiser. Se faltar a primeira, tem duas bases de dados de doentes a conviver na mesma clínica.

O que se segue é como confirmar em que caso está: o mecanismo que resolve isto, os quatro níveis de integração vendidos todos com a mesma palavra, e o que deve ficar por escrito antes de assinar.

## O problema não é o visualizador, são duas bases de doentes

Quase todos os programas de imagem trazem a sua própria base de dados de doentes. Alguém a preencheu na semana em que o sensor foi instalado, e desde então vive ao lado da do software de gestão.

As duas começam iguais e afastam-se sozinhas. Um apelido escrito sem o acento, uma data de nascimento digitada às nove menos cinco, um doente criado num lado e não no outro.

- **Aparecem duplicados dentro do programa de imagem**, e cada um leva consigo parte do histórico radiológico.
- **Perde-se a justificação do exame.** A imagem existe, mas não está ligada à consulta que a motivou.
- **Ninguém dá por isso enquanto o equipamento for o mesmo.** Nota-se no dia em que é preciso entregar um histórico completo, ou no dia da mudança de software.

> **O teste rápido são os nomes.** Abra o programa de imagem e procure os três doentes com mais consultas do último ano. Se algum aparece duas vezes, ou escrito de forma diferente da do histórico, a integração que tem é um botão que abre outro programa.

![Ficha do doente no separador de dados pessoais, com nome, contacto e informação administrativa](/screenshots/patients.png)

*A ficha de onde deviam sair o nome e a data de nascimento registados num exame.*

## A lista de trabalho é o mecanismo que resolve

A norma por detrás disto chama-se DICOM e é publicada pela NEMA. É também norma ISO, a ISO 12052, *Health informatics. Digital imaging and communication in medicine (DICOM) including workflow and data management*, e é a metade do título que diz *workflow* que quase nenhuma clínica dentária utiliza.

O mecanismo chama-se DICOM Modality Worklist. A ordem dos médicos dentistas de Baden-Württemberg descreve o percurso passo a passo na sua nota sobre DICOM na clínica dentária, e é o mesmo num hospital e numa clínica com dois gabinetes:

1. **O exame é pedido a partir do software de gestão**, com o doente já identificado na sua ficha.
2. **Esse pedido entra numa lista**, uma por equipamento ou uma única para todos.
3. **O equipamento lê a lista na sua própria consola** e recolhe dali os dados do doente. Ninguém os volta a escrever.
4. **O exame é feito** e as imagens ficam associadas a esses dados dentro do próprio equipamento.
5. **As imagens seguem para o arquivo** e o pedido, marcado como feito, desaparece da lista.

O passo três elimina o erro de escrita, e o passo cinco faz a imagem aparecer sozinha na ficha. Um sistema que só faz o cinco poupa-lhe a procura. Um que faz os dois acaba com a segunda base de doentes.

## Quatro níveis, uma só palavra

"Integrado com a sua radiologia" descreve coisas muito diferentes. Estes são os quatro níveis que se encontram mesmo numa clínica, do mais fraco ao mais completo.

| Nível | O que faz de facto | Doente escrito duas vezes | A imagem volta à ficha |
|---|---|---|---|
| Um botão que abre o visualizador | Lança o outro programa | ✗ Sim | ✗ Não |
| Passagem do doente | Envia o identificador ao abrir | ✓ Não | ~ Depende do fabricante |
| Lista de trabalho e envio DICOM | Pedido à ida, imagens à volta | ✓ Não | ✓ Sim |
| Serviços web DICOM | Além disso, pesquisa e recolha pela web | ✓ Não | ✓ Sim |

O último nível é o DICOMweb, que a própria norma define como "the DICOM Standard for web-based medical imaging" e descreve como um conjunto de serviços REST. Numa ficha técnica os nomes são QIDO-RS para procurar, WADO-RS para obter, STOW-RS para guardar e UPS-RS para as listas de trabalho.

> **Peça o nível pelo nome, não pelo adjetivo.** "Compatível" e "ligado" não querem dizer nada numa proposta. "Funciona como SCP de Modality Worklist" e "aceita STOW-RS" querem, e ambas se confirmam antes de pagar.

## O scanner intraoral é outro assunto

Um scanner intraoral não produz radiografias, produz malhas de superfície, e por omissão não as guarda em DICOM. De lá saem os formatos de malha do fabrico 3D, a começar por STL e OBJ, e muitos fabricantes mantêm o caso no seu próprio portal na nuvem, com conta e lista de doentes próprias.

A norma foi buscá-los. O Suplemento 205 do DICOM "adds a new DICOM IOD to encapsulate Stereolithography (STL) 3D model file formats", e o 208 fez o mesmo para o OBJ, para as bibliotecas de materiais MTL e para as texturas em JPG ou PNG.

- **Pergunte onde reside o caso**, não onde se vê. Se a resposta for o portal do fabricante do scanner, o arquivo não está na sua clínica.
- **Pergunte se a exportação leva a ligação ao doente**, e não apenas as imagens. Vinte mil malhas sem nome não são um histórico.
- **Pergunte o que acontece quando deixar de pagar o scanner.** É a mesma pergunta que toda a gente faz ao software de gestão e quase ninguém faz ao portal do fluxo digital.

> **A malha e a radiografia acabam em sítios diferentes, e o problema cabe nesta frase.** Um doente com um CBCT no arquivo, periapicais numa pasta do computador do gabinete e uma digitalização num portal web tem três históricos, e quem assinou o consentimento julga ter um.

![Ficha do doente no separador de atividade, com alertas clínicos, plano ativo e uma linha do tempo filtrável por consultas, tratamentos, pagamentos e comunicações](/screenshots/patient-timeline.png)

*A linha do tempo de um doente, onde se vê a que consulta pertence cada exame.*

## Como saber em vinte minutos o que tem hoje

Não é preciso uma auditoria. São precisas seis verificações, todas com um doente real e nenhuma irreversível.

1. **Crie um doente novo no software de gestão** e veja se aparece no programa de imagem sem ninguém lhe tocar.
2. **Comece um exame a partir do equipamento** e confirme se o doente já vem preenchido ou tem de ser procurado.
3. **Tire uma imagem e volte à ficha.** Conte os segundos até aparecer e, se não aparecer, anote onde estava.
4. **Localize a imagem no disco.** Se está numa pasta com o nome do fabricante e a sua cópia de segurança não a cobre, já tem um resultado.
5. **Exporte essa imagem para uma pen e abra-a noutro computador** sem o programa do fabricante instalado.
6. **Repita o ponto um com o scanner intraoral**, que é quase sempre o que fica de fora.

O que sair daqui vale mais do que qualquer folheto, porque descreve a sua clínica. Se o ponto quatro o deixar desconfortável, o guia sobre [armazenar radiografias](/pt/blog/armazenar-radiografias/) trata do formato e do arquivo.

## O que deve ficar por escrito

Isto negoceia-se antes de assinar e não depois, e cabe em cinco linhas de um email.

- **O DICOM conformance statement do equipamento e o do software.** A parte PS3.2 da norma obriga cada fabricante a publicar o que implementa de facto, por isso o documento existe e pode ser pedido.
- **Se o software funciona como servidor de lista de trabalho**, e com que equipamentos foi testado, com nomes e versões.
- **Onde ficam guardadas as imagens**, em que caminho ou serviço, e se entram na mesma cópia de segurança que o resto.
- **Como se exporta tudo**, em DICOM e com a ligação doente e data em formato legível, demonstrado agora com dez doentes.
- **Quanto custa cada ligação.** As pontes para equipamentos concretos são faturadas à parte mais vezes do que a demonstração deixa supor, e essa pergunta está também na lista de [perguntas antes de assinar](/pt/blog/perguntas-antes-de-assinar-software-dentario/).

Na Dentalpin as imagens ficam guardadas ligadas ao histórico clínico e no disco do seu próprio servidor, entrando na mesma cópia de segurança que tudo o resto e podendo ser levadas consigo. As condições estão em [preços](/pt/precos/).

## Fontes

- DICOM, edição em vigor e lista das partes (PS3.2 Conformance, PS3.4 Service Class Specifications, PS3.10 Media Storage and File Format, PS3.18 Web Services). [dicomstandard.org/current](https://www.dicomstandard.org/current). Consultado a 4 de setembro de 2026.
- DICOMweb, definição e serviços QIDO-RS, WADO-RS, STOW-RS e UPS-RS. [dicomstandard.org/using/dicomweb](https://www.dicomstandard.org/using/dicomweb). Consultado a 4 de setembro de 2026.
- DICOM Supplement 205, *Encapsulation of STL Models for 3D Manufacturing*, DICOM Standards Committee WG-17. [sup205.pdf](https://www.dicomstandard.org/News-dir/ftsup/docs/sups/sup205.pdf). Consultado a 4 de setembro de 2026.
- DICOM Supplement 208, *Extension of DICOM Encapsulation of Models for 3D Manufacturing* (OBJ, MTL e texturas). [sup208.pdf](https://www.dicomstandard.org/news-dir/progress/docs/sups/sup208.pdf). Consultado a 4 de setembro de 2026.
- ISO 12052, *Health informatics. Digital imaging and communication in medicine (DICOM) including workflow and data management*. [iso.org](https://www.iso.org/standard/72941.html). Consultado a 4 de setembro de 2026.
- Landeszahnärztekammer Baden-Württemberg, *Bildgebende Verfahren. DICOM in der Zahnarztpraxis*, 09/2019, descrição do percurso da DICOM Modality Worklist. [lzk-bw.de](https://lzk-bw.de/fileadmin/user_upload/Downloads/Rund_um_die_Praxisf%C3%BChrung/Bildgebende_Verfahren_DICOM_Zahnarztpraxis.pdf). Consultado a 4 de setembro de 2026.
