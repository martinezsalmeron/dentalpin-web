---
title: "Faturar convênios odontológicos: a GTO, o prazo e a glosa"
description: "Como funciona o faturamento de convênios odontológicos no padrão TISS: os campos da GTO que decidem o pagamento, onde ficam os prazos e o que guardar para recorrer de uma glosa."
pubDate: 2026-09-14
tags: [convenios, tiss, gto, faturamento, odontologia]
---

Faturar convênio odontológico é enviar a Guia de Tratamento Odontológico, a GTO, no padrão TISS, em lote, pelo portal da operadora, e guardar três números: o do lote, o do protocolo e o código de cada glosa. Os prazos para faturar e para recorrer não são nacionais: a ANS determina que sejam "livremente acordados entre as partes e expressos no contrato".

Ou seja, a regra que vale para a sua clínica está no contrato que você assinou com cada operadora, não numa norma geral. O que é nacional é o formato, e é ele que decide se a guia chega inteira do outro lado. O resto deste guia é campo por campo.

## O documento do faturamento odontológico é a GTO

A Troca de Informações na Saúde Suplementar, o TISS, "foi estabelecida como um padrão obrigatório para as trocas eletrônicas de dados de atenção à saúde dos beneficiários de planos", nas palavras da própria ANS. A versão em vigor hoje é a Julho/2026, publicada em 30 de julho de 2026, com o Componente Organizacional na versão 202607 e o de Conteúdo e Estrutura na 202511.

A odontologia não é um caso particular do faturamento médico dentro do padrão. Ela tem documentos próprios, e são quatro:

| Documento | Para que serve |
|---|---|
| Guia de Tratamento Odontológico (GTO) | A guia principal. Os mesmos campos carregam o procedimento solicitado e o realizado |
| Anexo Situação Inicial | Descreve a boca dente a dente antes do tratamento |
| Guia de Recurso de Glosa Odonto | O recurso, com campos de dente e face |
| Demonstrativo de Pagamento Odonto | O retorno da operadora, procedimento a procedimento |

Do lado da operadora existe uma obrigação que costuma passar despercebida e que é sua para cobrar: ela "deve disponibilizar portal corporativo na Internet" e designar um Coordenador TISS responsável pelo uso do padrão, com suplente.

## Os campos da GTO que decidem se você recebe

A lista completa de campos está no Componente de Conteúdo e Estrutura. Estes são os que a clínica erra, e cada erro tem um código de glosa esperando do outro lado:

- **Dente/Região e Face.** Os dois são condicionados, e a condição é ampla: dente "sempre que o procedimento for associado a um dente ou a uma região", face "quando for necessário identificar a(s) face(s) do dente que recebe(m) o tratamento". Se o odontograma não registra face, o faturamento também não registra.
- **CRO e UF do solicitante e do executante, mais o CBO.** São campos separados para quem pediu e para quem fez, e o código CBO do executante é obrigatório.
- **Código CNES do executante.** Obrigatório, com uma saída publicada pela própria ANS: "Caso o prestador ainda não possua o código do CNES preencher o campo com 9999999".
- **Senha, data da autorização e data de validade da senha.** Os três são condicionados à autorização prévia pela operadora, e a validade da senha tem campo e data próprios.
- **Indicador de autorização, um S ou um N por procedimento**, acompanhado do código do motivo de negativa quando a operadora não autorizou.
- **Data de realização e tipo de faturamento.** Ambos passam a ser obrigatórios assim que há procedimento realizado sendo informado na guia.

> **A GTO pede três assinaturas, não uma.** A do cirurgião-dentista solicitante, a do executante e a do beneficiário ou responsável, cada uma com a sua data, e as seis constam como obrigatórias na especificação da ANS. A do paciente é a que reaparece depois: a Amil Dental pede justamente "a digitalização da GTO assinada pelo beneficiário" para recorrer da glosa 9959.

![Prontuário do paciente com o odontograma, os alertas clínicos, o plano ativo e a próxima consulta](/screenshots/dental-chart.png)

*O odontograma do paciente, com os alertas clínicos, o plano ativo e a próxima consulta ao lado.*

## O prazo não é da ANS, está no seu contrato

Esta é a parte que mais gera confusão, e a ANS é direta sobre ela. Os prazos e procedimentos para faturamento e pagamento dos serviços prestados "devem ser livremente acordados entre as partes e expressos no contrato". Não existe um prazo nacional de faturamento nem um prazo nacional de recurso de glosa.

O que a ANS exige é que o contrato escrito diga, entre outras cláusulas obrigatórias, os "prazos e procedimentos para faturamento dos pagamentos e pagamento dos serviços prestados", a identificação dos procedimentos que precisam de autorização e a rotina de auditoria, "inclusive quanto às hipóteses em que o prestador poderá incorrer em glosa".

Duas regras dentro dessa cláusula valem mais do que o resto:

> **O seu prazo para contestar tem que ser igual ao prazo da operadora para responder.** A ANS coloca nesses termos: "o prazo acordado para contestação por parte do prestador deve ser igual ao prazo definido para resposta por parte da operadora". Um contrato que dá quinze dias para você e sessenta para ela está fora da regra.

A segunda é a que amarra tudo neste guia. É proibido criar regras que impeçam o acesso do prestador às justificativas das glosas ou que impeçam contestar a glosa, mas a própria ANS condiciona a proteção: essas vedações "só se aplicam se o prestador enviar seu faturamento utilizando o padrão obrigatório para Troca de Informações na Saúde Suplementar - Padrão TISS vigente".

Faturar em TISS, portanto, não é só burocracia. É o que compra o direito de discutir a glosa.

## O que as operadoras publicam não combina entre si

A prova de que o prazo é contratual está nas páginas das próprias operadoras, que publicam regras diferentes e datadas de anos diferentes.

- **Amil Dental**, em página de 6 de dezembro de 2022, descreve a glosa 9959 como "motivada pela ausência da Guia de Tratamento Odontológico (GTO) física (enviada pelo correio)" e exige que as GTOs físicas sejam enviadas pelo correio "até o primeiro dia útil do mês seguinte ao da confirmação do procedimento no portal". O passo a passo publicado é imprimir a GTO, pedir a assinatura do beneficiário, anexar as imagens e informar a data de realização de cada procedimento no portal, preferencialmente nas 24 horas seguintes ao atendimento e dentro do mês do atendimento.
- **Odontoprev**, em página de 25 de abril de 2024, publica o contrário: as GTOs físicas foram eliminadas, "basta acessar o portal do credenciado e o aplicativo da Odontoprev", e a ferramenta "acusa eventuais erros no processo de atendimento e de registro no prontuário".
- **Unafisco Saúde** publica na sua área do prestador odontológico o formulário da GTO e a legenda do anexo Situação Inicial, e exige que os dados do corpo clínico fiquem atualizados no sistema com nome completo, CPF, número do CRO, UF do CRO e especialidades.

Duas operadoras, duas exigências opostas sobre papel, com dezesseis meses de distância entre as páginas. Nenhuma das duas está errada: cada uma publica o seu próprio processo, e as duas mudam. A conclusão prática é chata e é a única honesta: a regra que vale para você é a do manual vigente da sua operadora, e vale conferir a data da página antes de tratar o que está escrito nela como atual.

## Sem lote, protocolo e código da glosa não há recurso

Olhe a Guia de Recurso de Glosa Odonto pelo lado dos campos obrigatórios e ela vira uma lista do que a clínica tinha que ter guardado:

1. **Número do lote**, obrigatório, doze caracteres. É o lote em que a guia foi enviada.
2. **Número do protocolo**, obrigatório, doze caracteres. É o número que a operadora devolveu no recebimento do lote.
3. **Objeto do recurso**, obrigatório: "número 1 no caso de se tratar de Recurso de Protocolo ou número 2 no caso de Recurso de Guia".
4. **Código da glosa**, quatro caracteres, em três níveis diferentes: do protocolo, da guia e do procedimento. Cada nível tem o seu campo e a sua justificativa.
5. **Valor recursado por procedimento**, e, na volta, o valor acatado pela operadora, que é preenchido com 0,00 quando ela não acata.

Repare no que isso significa para quem faturou e não anotou nada. O protocolo não é um detalhe administrativo, é campo obrigatório do recurso. Uma guia glosada cujo protocolo se perdeu não tem por onde ser recorrida no padrão.

> **A sua justificativa cabe em 150 caracteres.** O campo de justificativa do prestador, nos três níveis do recurso, é um texto de 150 posições. Não é espaço para contar o caso: é espaço para citar o que prova o caso, e o anexo vai separado. Escrever a justificativa antes de saber disso é perder metade dela no envio.

## O demonstrativo é onde a conta fecha

O Demonstrativo de Pagamento Odonto traz, por procedimento, cinco valores diferentes, e a diferença entre o primeiro e o último é exatamente o que a clínica precisa explicar todo mês:

| Campo | O que é |
|---|---|
| Valor informado | O que você cobrou |
| Valor processado | O que a operadora considerou depois da análise |
| Valor glosa/estorno | O que ela não pagou, com o código do motivo ao lado |
| Valor da franquia | A parte paga pelo beneficiário direto ao profissional |
| Valor liberado | O que entra na conta |

O mesmo demonstrativo carrega o número do lote, o número do protocolo, o número da guia no prestador, a data do pagamento e, de novo, dente, face e data de realização. É o documento que amarra o dinheiro ao procedimento, e é por isso que conferir demonstrativo linha a linha vale mais do que conferir o total do repasse.

![Lista de faturas com número, valor e situação de cada documento: emitida, paga, pago parcial, vencida e rascunho](/screenshots/invoices.png)

*Cada documento com a sua situação, separada do total. Faturado, parcialmente pago e vencido são estados diferentes, e o total esconde os três.*

## O ciclo inteiro, mensagem por mensagem

O padrão define as mensagens trocadas entre operadora e prestador. Na ordem em que uma clínica as encontra, e com os nomes que aparecem no portal:

1. **Verificação de elegibilidade**, e a resposta a ela. É onde se descobre que a carteira venceu, antes do atendimento e não depois.
2. **Solicitação de autorização para realização de procedimentos**, a autorização em si e, se demorar, a solicitação de status de autorização.
3. **Envio de lote de guias para cobrança** e o recebimento do lote, que é onde nasce o número do protocolo.
4. **Solicitação de status do protocolo** e a situação do protocolo, para acompanhar sem ligar.
5. **Solicitação de demonstrativos de retorno** e os demonstrativos de retorno para o prestador.
6. **Recurso de glosa**, o recebimento do recurso, a resposta ao recurso e a solicitação de status do recurso de glosa.

Existe também uma mensagem de solicitação de cancelamento de guia, com a sua resposta, que é o caminho previsto no padrão para uma guia enviada errada.

## O que acertar antes de se credenciar

O contrato escrito é obrigatório e a ANS pode aplicar as penalidades da RN nº 489/2022 quando ele não existe. Antes de assinar, tire do papel as respostas para estas perguntas:

1. **Qual é o prazo para faturar**, contado de quando: da realização, da confirmação no portal ou do fechamento do mês.
2. **Qual é o prazo para recorrer da glosa e qual é o prazo de resposta da operadora.** Os dois têm que ser iguais.
3. **Quais procedimentos exigem autorização prévia** e quanto tempo vale a senha.
4. **Como é a rotina de auditoria** e em que hipóteses a clínica incorre em glosa.
5. **Como funciona o reajuste.** Ele tem que ser anual. Se o contrato prevê livre negociação, o período foi padronizado em 90 dias corridos contados a partir de 1º de janeiro de cada ano, e só na falta de acordo, quando a livre negociação é a única forma prevista, entra o índice definido pela ANS.

Sobre o reajuste, uma ressalva que a própria ANS publica: a RN nº 508/2022 suspendeu a eficácia do artigo 12, § 2º, da RN nº 503/2022 e do artigo 6º da RN nº 512/2022, para cumprir decisão judicial da 2ª Vara Federal Cível da Seção Judiciária do Distrito Federal.

## Onde o Dentalpin entra, e onde não entra

O Dentalpin cobre a parte da clínica: agenda, prontuário, odontograma, plano de tratamento e orçamento discriminado por procedimento, que é de onde sai boa parte dos campos clínicos da GTO. O que ele não faz hoje, e é melhor dizer antes de você instalar para descobrir: **não gera GTO no padrão TISS, não envia lote pelo portal da operadora e não importa demonstrativo de pagamento**. Uma clínica que vive de convênio continua faturando pelo portal de cada operadora. É código aberto, roda no seu servidor e a [página de preços](/pt-br/precos/) é curta.

## Fontes

Tudo abaixo foi consultado em 14 de setembro de 2026.

- [TISS - Padrão para Troca de Informação de Saúde Suplementar](https://www.gov.br/ans/pt-br/assuntos/prestadores/padrao-para-troca-de-informacao-de-saude-suplementar-2013-tiss), ANS, de onde saem a obrigatoriedade do padrão e a exigência de portal corporativo e Coordenador TISS.
- [Padrão TISS – Julho/2026](https://www.gov.br/ans/pt-br/assuntos/prestadores/padrao-para-troca-de-informacao-de-saude-suplementar-2013-tiss/padrao-tiss-julho-2026), ANS, publicado em 30 de julho de 2026, com as versões de cada componente.
- [Padrão TISS, Componente de Conteúdo e Estrutura, versão 202511](https://www.gov.br/ans/pt-br/assuntos/prestadores/padrao-para-troca-de-informacao-de-saude-suplementar-2013-tiss/PadroTISS_ComponentedeContedoeEstrutura_202511.zip), ANS, de onde saem os campos da GTO, do Anexo Situação Inicial, da Guia de Recurso de Glosa Odonto e do Demonstrativo de Pagamento Odonto, além da relação das mensagens padronizadas.
- [Obrigatoriedade do contrato escrito](https://www.gov.br/ans/pt-br/assuntos/prestadores/fator-de-qualidade-1/obrigatoriedade-do-contrato-escrito), ANS, de onde saem as cláusulas obrigatórias, a livre pactuação dos prazos, a igualdade entre o prazo de contestação e o de resposta, a condição do padrão TISS para o acesso às justificativas de glosa, a RN nº 489/2022 e a ressalva da RN nº 508/2022.
- [Reajuste dos prestadores de serviços de saúde](https://www.gov.br/ans/pt-br/assuntos/prestadores/fator-de-qualidade-1/obrigatoriedade-do-contrato-escrito-1/reajuste-dos-prestadores-de-servicos-de-saude), ANS, sobre o reajuste anual, os 90 dias corridos a partir de 1º de janeiro e o índice da ANS.
- [Como evitar a glosa 9959](https://cms-conexaodentista.amil.com.br/amil-dental-e-voce/como-evitar-a-glosa-9959), Conexão Dentista, Amil Dental, página datada de 6 de dezembro de 2022.
- [Como a digitalização muda (para melhor) o dia a dia no consultório](https://conexao.odontoprev.com.br/como-a-digitalizacao-muda-para-melhor-o-dia-a-dia-no-consultorio/), Conexão Odontoprev, página datada de 25 de abril de 2024.
- [Prestador Odontológico](https://unafiscosaude.org.br/site/prestador-odontologico/), Unafisco Saúde, com o formulário da GTO, a legenda do anexo Situação Inicial e os dados exigidos do corpo clínico.

Isto não é orientação jurídica nem contábil. Prazos de faturamento e de recurso são contratuais e mudam de operadora para operadora, o padrão TISS é revisado várias vezes por ano, e a leitura que vale para a sua clínica é a do contrato que você assinou.
