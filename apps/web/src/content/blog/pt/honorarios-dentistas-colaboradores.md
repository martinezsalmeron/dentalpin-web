---
title: "Acertar contas com os médicos dentistas colaboradores: a conta que o software tem de fazer"
description: "Como se calcula a percentagem de um dentista colaborador: atribuição de tratamentos, deduções antes da percentagem, faturado ou recebido, e o mapa mensal."
pubDate: 2026-09-15
translationKey: liquidacion-doctores-colaboradores
tags: [colaboradores, honorarios, gestao, faturacao]
---

O acerto de contas com um colaborador é uma percentagem aplicada a uma base, e quase toda a discussão que acaba mal é sobre a base, não sobre a percentagem. Quatro decisões definem essa base: que tratamento se atribui a que profissional, o que se deduz antes de aplicar a percentagem, se o cálculo assenta no faturado ou no recebido, e como se reparte um tratamento feito por duas pessoas.

Se o software não conseguir responder a estas quatro perguntas linha a linha, o mapa mensal não é verificável. E um mapa que ninguém consegue verificar volta a ser discutido todos os meses.

## A percentagem é a última coisa a negociar

Dois acordos com percentagens diferentes podem pagar valores muito diferentes, e o número mais alto nem sempre ganha. Tomemos um tratamento faturado em 1.000 € com 300 € de laboratório.

- **40 % sobre a base líquida de laboratório** paga (1.000 − 300) × 0,40 = **280 €**.
- **35 % sobre a base bruta** paga 1.000 × 0,35 = **350 €**.

O acordo de 35 % paga mais setenta euros nesse tratamento. Não é um caso rebuscado: em prótese, implantologia e ortodontia o laboratório e o material pesam muito na fatura, e aí a base apaga qualquer diferença razoável de percentagem.

> **A percentagem mais alta nem sempre é a que paga mais.** Antes de discutir 35 ou 40, é preciso deixar escrito sobre que valor se aplica, e confirmar que o software consegue produzir esse valor sem ninguém o calcular à parte.

## O profissional pertence à linha de tratamento, não ao paciente

A atribuição falha quase sempre pelo mesmo motivo: o software guarda o profissional no sítio errado. Se o dado vive na ficha do paciente, como médico dentista responsável, ou na marcação, as contas saem erradas assim que alguém substitui um colega, entra uma urgência ou a higienista faz a fase de higiene de um plano longo.

O profissional tem de ser um campo da linha de tratamento, ao lado do código e do valor. Três perguntas a fazer antes de assinar seja o que for:

- **Cada linha pode ser atribuída separadamente?** Um orçamento com nove linhas pode envolver três profissionais, e isso é o normal, não a exceção.
- **O valor por omissão é quem tratou ou quem acompanha o paciente?** O segundo é cómodo e é exatamente o que produz mapas errados.
- **Uma alteração de atribuição fica registada, com quem a fez e quando?** Sem registo, uma correção legítima é indistinguível de um desvio, e é isso que envenena a relação.

![Plano de tratamento apresentado por fases, com os tratamentos de cada fase](/screenshots/treatment-plan.png)

*Um plano de tratamento dividido em fases, cada uma reunindo tratamentos que podem ser feitos em consultas diferentes.*

## O que se deduz antes de aplicar a percentagem

É aqui que os contratos ficam vagos. "Deduzidos os custos de laboratório" parece uma frase clara até chegar a primeira fatura de laboratório com um pilar de implante, ou até à primeira campanha de desconto feita na receção.

| Rubrica | Base bruta | Líquida de laboratório | Líquida de laboratório e material |
|---|---|---|---|
| Trabalhos de laboratório | ✗ Não se deduz | ✓ Deduz-se | ✓ Deduz-se |
| Implantes e alinhadores | ✗ Não se deduz | ~ Conforme a faturação do fornecedor | ✓ Deduz-se |
| Material de consumo | ✗ Não se deduz | ✗ Não se deduz | ✓ Deduz-se, com critério escrito |
| Descontos ao paciente | ~ Tem de ser acordado | ~ Tem de ser acordado | ~ Tem de ser acordado |
| Comissões de terminal de pagamento | ~ Tem de ser acordado | ~ Tem de ser acordado | ~ Tem de ser acordado |

Há dois pormenores que quase ninguém escreve e que mudam o resultado todos os meses. O primeiro é se os valores deduzidos entram com IVA ou sem IVA: uma fatura de laboratório de 300 € mais IVA não produz a mesma dedução que uma de 300 € totais.

O segundo é quem suporta os descontos ao paciente. Se a receção fecha um plano com 10 % de desconto por pagamento a pronto, esses 10 % podem sair inteiramente da clínica, inteiramente do colaborador, ou ser repartidos. As três hipóteses defendem-se. A única indefensável é não ter decidido.

## Sobre o faturado ou sobre o recebido?

Esta é a decisão que move mais dinheiro e a que mais exige do software. Determina quem suporta o risco de incobrável e quando é que o colaborador recebe.

| | Sobre o faturado | Sobre o recebido | Misto |
|---|---|---|---|
| Quando o colaborador recebe | ✓ Ao emitir a fatura | ✗ À medida que o dinheiro entra | ~ Na fatura, com acerto posterior |
| Quem suporta o incobrável | ✗ A clínica | ✓ Reparte-se | ~ Acerta-se depois |
| O que o software tem de saber fazer | ~ Atribuição por linha | ✗ Além disso, imputar recebimentos às linhas | ✗ As duas coisas e um histórico |
| Facilidade de verificação | ✓ Alta | ~ Média | ✗ Baixa |

O modelo sobre o recebido parece mais justo e é o que parte mais programas. Para o aplicar, cada pagamento parcial tem de saber que linhas de tratamento liquida, e isso não é o mesmo que saber quanto o paciente deve no total.

> **Um plano de 3.000 € pago em doze prestações, tratado por dois profissionais, é a prova de fogo.** Se o software sabe que entraram 250 € este mês mas não a que tratamentos os imputa, o modelo sobre o recebido deixa de ser calculável e acaba numa folha de cálculo ao lado.

![Lista de faturas com os estados emitida, paga, parcialmente paga, vencida e rascunho](/screenshots/invoices.png)

*Uma lista de faturas em que cada linha mostra o seu estado de pagamento, separando o que está liquidado do que está parcialmente pago ou vencido.*

## Um tratamento feito por dois

Acontece mais do que parece: uma endodontia encaminhada internamente, uma cirurgia de implantes colocada por um e reabilitada por outro, uma ortodontia acompanhada por um especialista que vem dois dias por mês. Uma linha de fatura, o trabalho de duas pessoas.

1. **Fixar a regra antes do caso, não depois.** Atribuir a quem termina, repartir por consulta, ou repartir com uma percentagem fixa por tipo de tratamento são três regras válidas; improvisar caso a caso não é.
2. **Confirmar se o software permite dividir a linha.** Se não aceita dois profissionais com duas quotas no mesmo tratamento, a saída limpa é faturar cirurgia e prótese como rubricas separadas.
3. **Registar a consulta, não apenas o tratamento.** Se cada consulta fica com o seu profissional, a repartição por consulta calcula-se sozinha e deixa de ser uma negociação.
4. **Escrever o caso incómodo no contrato.** O que acontece quando um colaborador sai a meio de um plano longo é a cláusula que ninguém redige e de que toda a gente acaba por precisar.

## O que o mapa mensal tem de mostrar

A prova de que um acerto está bem feito é o profissional conseguir reconstruí-lo a partir dos seus tratamentos sem pedir nada a ninguém. Isso exige que cada linha traga:

1. **Data e paciente**, com um identificador que permita abrir o histórico clínico.
2. **Tratamento e código**, tal como constam do orçamento aceite.
3. **Profissional atribuído** e, se a linha for repartida, a quota de cada um.
4. **Valor faturado**, antes de descontos.
5. **Descontos aplicados**, com o motivo e não apenas um valor solto.
6. **Valor recebido no período**, se o acordo assentar no recebido.
7. **Deduções**, cada uma com a sua designação e o documento de origem.
8. **Base, percentagem e valor a pagar**, em três colunas separadas.

Por baixo, três coisas que costumam faltar: o total por profissional, uma secção de acertos de períodos anteriores (um incobrável recuperado, uma nota de crédito) e um número que bata certo com a caixa do período. Sem essa última linha, o mapa é uma afirmação.

> **Se o mapa não puder ser recalculado a partir dos tratamentos, não é um cálculo, é um número.** O teste prático é simples: entregue-o a alguém que não o tenha feito e peça para chegar ao mesmo total. Se não conseguir, o problema é o relatório, não a pessoa.

## Este artigo não lhe vai dizer que percentagem acordar

Não vai, porque não há fonte oficial que a publique. Os números que circulam vêm de consultoras e da imprensa do setor, citam-se uns aos outros e envelhecem sem que ninguém os reveja.

O que se pode afirmar é que comparar duas percentagens sem comparar as bases não significa nada, e que a clínica do lado não é uma referência útil enquanto não souber o que deduz antes de as aplicar.

## Em Portugal, a fatura do colaborador leva retenção na fonte

O colaborador que trabalha por conta própria emite fatura-recibo à clínica, e essa fatura está sujeita a retenção na fonte de IRS. Quem retém e quem entrega o imposto ao Estado é a clínica, pelo que o valor transferido para o profissional não é o valor da fatura.

O artigo 101.º do Código do IRS, na versão publicada pela Autoridade Tributária com data de maio de 2026 e consultada a 15 de setembro de 2026, fixa na alínea b) do n.º 1 uma taxa de "23 %, tratando-se de rendimentos decorrentes das atividades profissionais especificamente previstas na tabela a que se refere o artigo 151.º". O mesmo número prevê outras taxas para rendimentos de categoria B que não constam dessa tabela, pelo que a taxa correta depende do código de atividade do colaborador e deve ser confirmada caso a caso.

Daqui saem duas consequências práticas para o software. O mapa de acerto e a fatura do colaborador têm de bater certo um com o outro, e o valor transferido tem de poder explicar-se como base menos retenção. Se o programa calcula o acerto mas a retenção é feita à parte, o desencontro aparece no fecho do trimestre.

Se a relação é de facto trabalho independente ou se configura contrato de trabalho não se decide pelo nome do contrato, e não é o tema deste artigo. **Isto não é aconselhamento jurídico nem fiscal**: confirme com o seu contabilista certificado e com as fontes oficiais antes de assinar.

## O que exigir ao software

Numa frase: que o profissional seja um dado da linha de tratamento, que os recebimentos sejam imputados às linhas e que o relatório mensal possa ser recalculado a partir dos dados. Com estas três coisas, qualquer acordo razoável se liquida; sem elas, nenhum acordo se verifica.

No Dentalpin a atribuição vive na linha de tratamento e os recebimentos são imputados às linhas que liquidam, o que torna calculável um acerto sobre o recebido sem uma folha de cálculo ao lado. Está tudo incluído e sem custo por utilizador: os detalhes estão na [página de preços](/pt/precos/).

## Fontes

- Autoridade Tributária e Aduaneira, *Código do IRS, artigo 101.º (Retenção sobre rendimentos de outras categorias)*, versão de maio de 2026. Consultado a 15 de setembro de 2026. <https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs_rep/Pages/irs101.aspx>
