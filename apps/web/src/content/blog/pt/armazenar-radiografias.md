---
title: "Radiografias digitais: como guardá-las, encontrá-las e partilhá-las"
description: "Como guardar radiografias dentárias: porquê o DICOM, que prazo de conservação se aplica em Portugal, onde a imagem vive e como partilhá-la em segurança."
pubDate: 2026-08-28
translationKey: almacenar-radiografias-digitales
tags: [radiografias, dicom, historico-clinico, rgpd, gestao]
---

Guarde cada radiografia dentro do histórico clínico do doente, num formato que consiga abrir sem o programa do fabricante do sensor, e mantenha uma cópia fora da clínica. Em Portugal a lei obriga a criar, manter, atualizar e conservar em arquivo o processo clínico, mas não fixa um número de anos para uma clínica privada, o que faz do prazo uma decisão sua, escrita e justificada.

O que se segue é como isso se resolve na prática: que formato exigir, onde a imagem tem de viver, quanto espaço vai precisar e como entregar uma imagem sem transformar isso num incidente.

## O formato importa mais do que o disco

Uma radiografia digital não é só uma grelha de pontos. Traz consigo o doente, a data, o equipamento, a técnica e os parâmetros de exposição, e é essa parte que transforma uma imagem em documentação clínica.

A norma internacional para isto é o DICOM, que a NEMA define como a norma para transmitir, guardar, recuperar, imprimir, processar e apresentar informação de imagem médica. Está disponível gratuitamente, por isso qualquer pessoa pode verificar o que diz.

- **DICOM PS3.10** define o formato, que é o que permite copiar uma imagem para outro sítio e continuar a conseguir lê-la.
- **DICOM PS3.2** define a conformidade e obriga cada fabricante a publicar um documento com aquilo que implementa na realidade. Esse documento pede-se antes de comprar, não depois.
- **Um JPEG exportado não é a mesma coisa.** Serve para mostrar ao doente e não serve como arquivo, porque perde os metadados e muitas vezes a profundidade de bits.

> **O teste que diz se tem um arquivo ou um refém.** Pegue numa radiografia de há dois anos, copie-a para uma pen e abra-a num computador onde o programa do sensor não esteja instalado. Se não abrir, não tem um arquivo clínico, tem uma imagem fechada dentro de um produto.

## O prazo de conservação, e porque tem de o escrever

A Entidade Reguladora da Saúde, nas perguntas frequentes sobre acesso à informação de saúde, remete para a Lei n.º 12/2005 e para o dever de criar, manter, atualizar e conservar em arquivo o processo clínico. Não indica ali um prazo em anos.

Isso não deixa a decisão em aberto: o RGPD exige que os dados sejam conservados apenas durante o tempo necessário para a finalidade, o que obriga a definir esse tempo e a conseguir explicá-lo.

- **Escreva o prazo antes de precisar dele.** Uma regra que consegue mostrar é uma decisão defensável. Apagar imagens porque o disco encheu é o mesmo ato sem defesa nenhuma.
- **Conte a partir do fim do episódio de cuidados**, não da data em que a imagem foi tirada. Um tratamento de três anos arrasta as suas imagens até ao fim desse período.
- **Trate os menores à parte.** Uma regra que só olha para a data da consulta apaga imagens de doentes que ainda podem vir a reclamá-las em adulto.

| Decisão | O que costuma acontecer | O que tem de conseguir mostrar |
|---|---|---|
| Quando se apaga uma imagem | ✗ Nunca se decide, apaga-se quando falta espaço | ✓ Uma regra escrita e aplicada de igual forma |
| Quem a pode apagar | ✗ Qualquer pessoa com acesso à pasta | ✓ Uma permissão concreta, com registo |
| Onde está a cópia mais antiga | ~ Num disco dentro de um armário | ✓ Num suporte que alguém leu este ano |

## A imagem vive no processo clínico, não numa pasta

A falha mais comum não é perder radiografias, é não as encontrar. Uma pasta chamada `2019-11-14` com doze imagens numeradas é papel digitalizado, não é processo clínico.

Assim que a imagem fica ligada ao doente e à consulta, três coisas deixam de ser problema: encontrá-la, saber porque foi feita e saber quem a viu.

![Processo clínico de um doente com odontograma, alertas clínicos e plano de tratamento em curso](/screenshots/dental-chart.png)

*O processo onde a imagem acaba ligada, ao lado do dente que documenta e do plano que a justificou.*

| | Pasta no computador do gabinete | Pasta partilhada no servidor | Ligada ao processo clínico |
|---|---|---|---|
| Encontrar a imagem de um doente | ✗ Depende do nome dado naquele dia | ~ Só enquanto alguém mantiver a convenção | ✓ Está no processo |
| Entra na cópia de segurança | ✗ Quase nunca | ~ Se alguém se lembrou de a incluir | ✓ Com os restantes dados |
| Sobrevive à troca de computador | ✗ Fica na máquina antiga | ~ Se a partilha for migrada | ✓ Acompanha a base de dados |
| Registo de quem a consultou | ✗ Nenhum | ✗ Nenhum | ~ Só se o software registar acessos |

## Meça o espaço, não o estime

Nenhum número geral serve, porque depende do sensor, da resolução e de fazer ou não volumetria. O que há é uma forma de saber em dez minutos.

1. **Veja o tamanho da pasta de imagens dos últimos doze meses.** É o único número que descreve a sua clínica e não a de outra pessoa.
2. **Divida-o pelos doentes atendidos** nesse período. Já tem a sua média real por doente.
3. **Multiplique pelos doentes que espera e pelos anos que decidiu conservar.** É o tamanho do seu arquivo daqui a dez anos.
4. **Meça a volumetria à parte**, se a fizer. Um volume 3D não está na mesma escala de uma periapical, e um único exame pode pesar mais do que um ano de intraorais.
5. **Compare esse número com o espaço incluído pelo seu fornecedor** e com o custo do escalão seguinte. É aí que a surpresa costuma estar.

> **Um arquivo que cresce sem regra acaba a decidir por si.** No dia em que o disco enche, a pergunta já não é o que conservar, é o que apagar depressa. E o que desaparece são as imagens dos doentes que deixaram de vir, ou seja, exatamente as que alguém vai pedir daqui a três anos.

## A cópia de segurança que deixa as imagens de fora

As radiografias são quase todo o volume de dados de uma clínica, por isso são as primeiras a ser excluídas quando uma cópia tem de acabar durante a noite. A tarefa continua a correr, continua a avisar que correu bem, e já não protege o que mais ocupa.

- **Confirme o tamanho da cópia**, e não apenas o aviso de conclusão. Se pesa muito menos do que os seus dados, as imagens estão a ficar de fora.
- **Restaure uma cópia completa pelo menos uma vez por ano** e abra três doentes com radiografias. O procedimento está no guia das [cópias de segurança](/pt/blog/copias-seguranca-clinica-dentaria/).
- **Cifre qualquer suporte que saia da clínica.** Um disco perdido com imagens clínicas é uma violação de dados que se notifica.

## Partilhar sem criar um incidente

Uma radiografia identifica uma pessoa e descreve a sua saúde, por isso é um dado de categoria especial. O RGPD exige medidas adequadas ao risco, e um anexo em correio comum não é uma medida adequada quando existe alternativa.

- **Com o doente:** tem direito a uma cópia. Entregue o DICOM se ele vai a um especialista, e junte uma versão que consiga abrir em casa sem software próprio.
- **Com outro profissional:** uma ligação temporária ou um portal vale mais do que um anexo, porque expira e deixa registo. Se tiver de ser correio, vai cifrado e a palavra-passe segue por outra via.
- **Com o laboratório:** envie apenas o que o trabalho exige. Uma coroa não pede todo o histórico radiológico do doente.
- **Registe cada entrega.** Data, destinatário, via e conteúdo. Esse registo é a resposta a uma reclamação dois anos depois.

![Processo do doente no separador de atividade, com alertas clínicos, plano em curso e uma linha temporal filtrável por consultas, tratamentos, pagamentos e comunicações](/screenshots/patient-timeline.png)

*A linha temporal do doente, onde se vê em que consulta cada exame foi feito.*

## Quando muda de software, as imagens são o que fica para trás

Numa migração negoceia-se a base de dados e esquecem-se as imagens. Peça três coisas concretas por escrito, antes de assinar.

1. **Uma exportação das imagens em DICOM**, não uma pasta de capturas nem um visualizador proprietário.
2. **A ligação entre cada imagem, o seu doente e a sua data**, num documento legível. Sem isso tem vinte mil imagens e nenhum histórico.
3. **Uma exportação de teste agora**, com dez doentes reais, em vez de uma promessa para o dia em que sair.

Essa conversa corre melhor antes do compromisso e está na lista de [perguntas a fazer antes de assinar](/pt/blog/perguntas-antes-de-assinar-software-dentario/).

No Dentalpin as imagens ficam ligadas ao processo clínico e assentes no sistema de ficheiros, por isso entram na mesma cópia de segurança da base de dados e pode levá-las consigo quando quiser. As condições estão em [preços](/pt/precos/).

## Fontes

- Entidade Reguladora da Saúde, perguntas frequentes sobre o direito de acesso à informação de saúde e à proteção de dados pessoais, com remissão para a Lei n.º 12/2005. [ers.pt](https://www.ers.pt/pt/utentes/perguntas-frequentes/faq/direito-de-acesso-a-informacao-de-saude-e-a-protecao-de-dados-pessoais/). Consultado a 28 de agosto de 2026.
- Norma DICOM, edição em vigor e lista de partes (PS3.2 Conformance, PS3.10 Media Storage and File Format for Media Interchange). [dicomstandard.org](https://www.dicomstandard.org/current). Consultado a 28 de agosto de 2026.
- Regulamento (UE) 2016/679 (RGPD), artigos 5.º, 9.º, 15.º e 32.º. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consultado a 28 de agosto de 2026.

Isto não é aconselhamento jurídico. O prazo aplicável ao seu caso deve ser confirmado com o seu jurista ou com a Ordem dos Médicos Dentistas.
