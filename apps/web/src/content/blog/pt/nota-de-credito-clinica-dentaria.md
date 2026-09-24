---
title: "Uma fatura já emitida está errada: nota de crédito, documento retificativo e o que o software não pode fazer"
description: "Como corrigir uma fatura já emitida numa clínica dentária: documento retificativo do artigo 29.º do CIVA, prazos do artigo 78.º e a prova exigida ao adquirente."
pubDate: 2026-09-24
translationKey: factura-rectificativa-clinica-dental
tags: [faturacao, nota-de-credito, civa, gestao-de-clinica]
---

Uma fatura já emitida não se altera nem se apaga: corrige-se emitindo um segundo documento que identifica o primeiro, e o primeiro fica onde está. O n.º 7 do artigo 29.º do CIVA diz-lo numa só frase: "Quando o valor tributável de uma operação ou o imposto correspondente sejam alterados por qualquer motivo, incluindo inexatidão, deve ser emitido documento retificativo de fatura".

É isto que colide com o hábito da clínica. Na agenda ou no histórico clínico corrige-se um erro mudando o dado. Na faturação nunca, e num programa certificado nem tecnicamente.

## Deve, não pode

Vale a pena notar o verbo. A norma não diz que se pode emitir um documento retificativo, diz que **deve**. E o artigo 78.º remete de volta para as regras de faturação: "As disposições dos artigos 36.º e seguintes devem ser observadas sempre que, emitida a fatura, o valor tributável de uma operação ou o respetivo imposto venham a sofrer retificação por qualquer motivo" (n.º 1).

Documento retificativo é o nome genérico. Na prática são três: **nota de crédito** quando o valor desce, **nota de débito** quando sobe, e **nota de devolução**.

> **Apagar não é uma opção que exista.** Um documento retificativo acrescenta-se à numeração em vez de substituir o que corrige. A fatura original continua na série, com o seu número, e é isso que permite explicar dois anos depois o que aconteceu.

## Os prazos são diferentes para cima e para baixo, e é aí que se falha

O n.º 3 do artigo 78.º é a parte que quase ninguém tem presente:

"Nos casos de facturas inexactas que já tenham dado lugar ao registo referido no artigo 45.º, a rectificação é obrigatória quando houver imposto liquidado a menos, podendo ser efectuada sem qualquer penalidade até ao final do período seguinte àquele a que respeita a factura a rectificar, e é facultativa, quando houver imposto liquidado a mais, mas apenas pode ser efectuada no prazo de dois anos."

Traduzido para a clínica: **se liquidou imposto a menos, tem de corrigir**, e tem uma janela sem penalidade até ao fim do período seguinte. **Se liquidou a mais, pode corrigir**, mas o prazo é de dois anos e depois disso o direito desaparece.

Para a anulação ou redução do valor por outro motivo, o n.º 2 dá a sua própria janela: quando a operação seja anulada ou o valor tributável reduzido "em consequência de invalidade, resolução, rescisão ou redução do contrato, pela devolução de mercadorias ou pela concessão de abatimentos ou descontos", a dedução do imposto correspondente pode ser feita "até ao final do período de imposto seguinte àquele em que se verificarem as circunstâncias".

## A prova de que o paciente soube

Esta é a regra que transforma a nota de crédito numa entrega e não num ficheiro. O n.º 5 do artigo 78.º:

"Quando o valor tributável de uma operação ou o respectivo imposto sofrerem rectificação para menos, a regularização a favor do sujeito passivo só pode ser efectuada quando este tiver na sua posse prova de que o adquirente tomou conhecimento da rectificação ou de que foi reembolsado do imposto, sem o que se considera indevida a respectiva dedução."

Ou seja: **a nota de crédito na gaveta não serve.** Tem de haver prova de que o adquirente tomou conhecimento, e essa prova é um registo, não uma lembrança. É a razão pela qual a entrega do documento tem de ficar assinalada no processo do paciente com data.

> **Dois anos e o direito desaparece.** É a assimetria do n.º 3 do artigo 78.º: quando há imposto liquidado a menos a clínica *tem* de corrigir, quando há imposto liquidado a mais *pode* corrigir, mas só durante dois anos. A fatura antiga com IVA indevido que ninguém reviu é dinheiro que deixa de ser recuperável por prazo, não por erro.

![Lista de faturas com os estados emitida, paga, parcialmente paga, vencida e rascunho](/screenshots/invoices.png)

*Uma lista de faturas com os seus estados. Um documento retificativo não faz desaparecer uma linha: acrescenta outra.*

## O IVA em medicina dentária muda o tamanho do problema, não a sua forma

Boa parte do que a clínica fatura está isento. O artigo 9.º do CIVA isenta, no n.º 1), "as prestações de serviços efetuadas no exercício das profissões de médico, odontologista, psicólogo, parteiro, enfermeiro e outras profissões paramédicas", no n.º 2) as prestações médicas e sanitárias de clínicas e estabelecimentos similares, e no n.º 3) as prestações dos protésicos dentários.

Convém dizê-lo com clareza: **a isenção não dispensa de faturar nem de retificar bem.** A obrigação do n.º 7 do artigo 29.º é de faturação e não de imposto, e a continuidade da numeração verifica-se do mesmo modo. O que muda é que a maioria dos documentos retificativos de uma clínica não mexe em imposto, só em valor e em dados.

## Os casos que aparecem mesmo

| Situação | O que se emite |
|---|---|
| Valor errado, descoberto no dia seguinte | ✓ Documento retificativo identificando a fatura |
| Nome ou NIF errado, tratamento certo | ✓ Documento retificativo: há inexatidão |
| O pagamento no TPA já passou | ~ Nota de crédito mais devolução: são duas coisas |
| Tratamento interrompido a meio do plano | ✓ Nota de crédito pela parte não prestada |
| O paciente pede a fatura no nome da empresa | ✗ Não é retificação: o adquirente seria outro |
| Emitida duas vezes no mesmo dia | ✓ Nota de crédito sobre uma delas, não apagar |
| Adiantamento que depois vira fatura de tratamento | ~ Não é automaticamente uma retificação |

Duas linhas merecem uma frase, porque são as que dão discussão na receção.

**Uma fatura em nome de terceiro não é uma fatura corrigida.** Se o tratamento foi prestado à paciente e a fatura foi emitida à paciente, passá-la para a empresa não corrige defeito nenhum: cria outra operação com outro adquirente. Decide-se antes de emitir.

**Uma fatura de adiantamento não é substituída.** Existe e vale; a fatura do tratamento recolhe o restante. Só há nota de crédito se o adiantamento for devolvido ou o tratamento cair.

## O que o programa tem de fazer

- **Não oferecer edição sobre uma fatura emitida.** Se o campo do valor continua editável depois de emitir, o problema é o programa.
- **Criar o documento retificativo a partir da fatura**, herdando número, série e data em vez de os pedir escritos à mão.
- **Manter a numeração sequencial e sem falhas**, incluindo notas de crédito, para que um número em falta se veja em vez de simplesmente faltar.
- **Registar a entrega ao paciente com data**, porque é isso que o n.º 5 do artigo 78.º exige como prova, e ninguém se lembra em janeiro do que entregou em outubro.
- **Mostrar a conta do paciente como uma cadeia**, original e retificativo, e não só o saldo. Um saldo certo com o histórico escondido é exatamente o que não se consegue explicar depois.
- **Separar o documento do recebimento**, para que devolver 80 € não reescreva uma fatura e emitir uma nota de crédito não mova a caixa por si.

![Painel de relatórios da clínica](/screenshots/reports.png)

*É nos relatórios que uma falha na numeração aparece, não na lista de faturas do mês.*

## A ordem das coisas

1. **Veja se o erro está no documento ou na operação.** Um dado mal escrito é inexatidão; um tratamento que não foi prestado é redução do valor tributável.
2. **Não toque na fatura original.** Nem no valor, nem no nome, nem na data.
3. **Emita o documento retificativo**, identificando a fatura retificada pelo número, série e data.
4. **Entregue-o ao paciente e guarde a prova da entrega.** Sem isso, a regularização a favor da clínica não se pode fazer.
5. **Confirme o prazo**: até ao fim do período seguinte quando há imposto a menos, dois anos quando há imposto a mais.
6. **Trate o dinheiro em separado**: devolução, desconto na fatura seguinte ou nota na dívida pendente.
7. **Avise o contabilista** se o período já foi entregue.

## O que este artigo não cobre

- **O conjunto trimestral para o contabilista** está [noutro artigo](/pt/blog/relatorios-para-o-contabilista/).
- **A caixa que não fecha ao fim do dia** não é um erro de fatura: é o [fecho de caixa diário](/pt/blog/caixa-diaria-clinica/).
- **Uma fatura não paga** não se corrige por estar em dívida, cobra-se: [controlo de dívidas de pacientes](/pt/blog/controlo-de-dividas-de-pacientes/).
- **Créditos de cobrança duvidosa ou incobráveis** têm regime próprio nos artigos 78.º-A a 78.º-D do CIVA, com certificação por contabilista certificado ou revisor oficial de contas, e não são uma nota de crédito.

## Onde entra o software

No Dentalpin uma fatura emitida deixa de ser editável, o documento retificativo cria-se a partir dela com o número e a data do original, o recebimento e o documento são registos distintos, a entrega ao paciente fica datada, e a conta do paciente mostra a cadeia inteira em vez do resultado. Está incluído, sem custo por utilizador: os detalhes estão na [página de preços](/pt/precos/).

**Isto não é aconselhamento fiscal.** As fontes oficiais estão em baixo com a data de consulta; para um caso concreto, fale com o seu contabilista certificado ou com a AT.

## Fontes

- Código do Imposto sobre o Valor Acrescentado (CIVA), artigo 29.º n.º 7 e artigo 9.º n.os 1), 2) e 3). Versão publicada pela Autoridade Tributária e Aduaneira. Consultado a 24 de setembro de 2026. <https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/Cod_download/Documents/CIVA.pdf>
- Código do Imposto sobre o Valor Acrescentado (CIVA), artigo 78.º (Regularizações), n.os 1, 2, 3 e 5. Página da Autoridade Tributária e Aduaneira. Consultado a 24 de setembro de 2026. <https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/civa_rep/Pages/iva78.aspx>
