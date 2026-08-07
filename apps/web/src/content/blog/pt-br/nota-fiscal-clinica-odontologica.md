---
title: "Nota fiscal na clínica odontológica: o que muda em 2026"
description: "O que a clínica odontológica emite, quando começa o destaque de IBS e CBS na NFS-e e o que continua sendo decisão do seu município."
pubDate: 2026-08-07
tags: [nota-fiscal, nfs-e, reforma-tributaria, odontologia]
---

Atendimento odontológico é serviço sujeito ao ISS, subitem 4.12 da lista anexa à Lei Complementar 116/2003, e o documento que a clínica emite é a NFS-e. O que muda em 2026 são três datas: o Emissor Nacional passa a ser obrigatório para ME e EPP optantes do Simples Nacional em 1º de setembro, o destaque de IBS e CBS na NFS-e dos serviços da lista da LC 116 começa em 1º de outubro, e até 31 de dezembro a ausência desses campos não faz a nota ser rejeitada.

O resto deste guia é o que cada uma dessas datas exige na prática, o que continua sendo decisão do seu município e quais dados precisam sair do sistema para a nota fechar com a Dmed no ano seguinte.

## O serviço é o 4.12, e quem fixa a alíquota é o município

A lista anexa à LC 116/2003 separa em subitens diferentes coisas que na clínica acontecem no mesmo dia:

- **4.12, Odontologia.** O atendimento em si, que é o enquadramento da maior parte do que a clínica fatura.
- **4.03, hospitais, clínicas, laboratórios, sanatórios e congêneres.** A estrutura, quando o enquadramento é do estabelecimento e não do ato.
- **4.14, próteses sob encomenda.** A prótese tem subitem próprio, separado do atendimento.
- **4.22, planos e convênios para prestação de assistência médica, hospitalar, odontológica e congêneres.** Quem opera o plano, não quem atende por ele.

A alíquota não está na lei federal. A LC 116 fixa só o teto e o piso: o art. 8º, II põe a alíquota máxima do ISS em 5%, e o art. 8º-A, incluído pela Lei Complementar 157/2016, põe a mínima em 2%. O número exato é do seu município, e o da cidade vizinha pode ser outro.

> **Entre 2% e 5% é uma diferença de duas vezes e meia.** Numa clínica que fatura R$ 80 mil por mês, é a distância entre R$ 1.600 e R$ 4.000 de ISS. Vale confirmar a alíquota na legislação do seu município antes de aceitar o número que o sistema trouxe por padrão.

## O que é regra nacional e o que o seu município ainda decide

Esta é a divisão que costuma confundir, porque a NFS-e virou padrão nacional sem que o ISS deixasse de ser municipal:

| O que | Quem define |
|---|---|
| Modelo, leiaute e validações da NFS-e | Comitê Gestor da NFS-e de padrão nacional |
| Datas do destaque de IBS e CBS | Ato Conjunto RFB/CGIBS nº 4/2026 |
| Uso obrigatório do Emissor Nacional | CGSN, Resolução nº 189/2026 |
| Dados que o comprovante precisa conter | Receita Federal |
| Dmed, a declaração anual de serviços de saúde | Receita Federal, IN RFB nº 2.074/2022 |
| Alíquota do ISS, entre 2% e 5% | Seu município |
| Código do serviço e credenciamento | Seu município |
| Adesão e parametrização ao padrão nacional | Seu município |

Esse último item não é teórico. Em 13 de maio de 2026 a Secretaria Executiva do Comitê Gestor da NFS-e publicou um alerta dizendo que ainda existem municípios que não aderiram ao padrão nacional e outros que não concluíram a parametrização obrigatória, com a lista dos pendentes anexada à notícia.

## As quatro datas de 2026

1. **1º de setembro de 2026, Emissor Nacional.** ME e EPP optantes do Simples Nacional passam a emitir obrigatoriamente pelo Emissor Nacional da NFS-e, por decisão do CGSN na Resolução nº 189/2026, publicada no DOU em 28 de abril de 2026. A emissão pode ser feita pelo portal do contribuinte ou por um sistema integrado via API com a SEFIN Nacional.
2. **1º de outubro de 2026, destaque de IBS e CBS.** Para os serviços sujeitos ao ISS enquadrados na lista da LC 116 e não incluídos nos subitens 1.03, 1.05, 1.09 e 16.01, a NFS-e passa a exigir o preenchimento das informações de IBS e CBS. Odontologia cai nesse grupo, porque os subitens excepcionados tratam de processamento de dados, licenciamento de software, disponibilização de conteúdo pela internet e transporte municipal.
3. **1º de dezembro de 2026, o resto.** Plataformas digitais e os serviços que elas intermediam, os subitens excepcionados acima, locações de bens móveis e imóveis, taxas condominiais e os fornecimentos que não se enquadrem em nenhuma hipótese anterior.
4. **1º de janeiro de 2027, parte do Simples.** Optantes do Simples Nacional que optarem pelo destaque de IBS e CBS em setembro de 2026 só começam a preencher em 2027.

> **Não ser rejeitada não é o mesmo que estar certa.** Até 31 de dezembro de 2026, a ausência das informações de IBS e CBS na NFS-e não faz o sistema nacional rejeitar o documento. A própria SE/CGNFS-e acrescenta que a falta evidencia a desconformidade do documento fiscal e sujeita quem emitiu às sanções e aos prazos do Ato Conjunto RFB/CGIBS nº 4/2026.

![Lista de faturas com número, paciente, valor e situação: emitida, paga, pago parcial, vencida e rascunho](/screenshots/invoices.png)

*Cada documento com número, data, valor e situação. Emitida, paga, pago parcial, vencida e rascunho são estados diferentes do mesmo registro.*

## Em 2026 você destaca, mas não recolhe

O ano de 2026 é o período de teste da CBS e do IBS, e a Receita Federal é explícita sobre o efeito prático: o contribuinte que emitir documentos fiscais ou declaração de regimes específicos observando as normas e notas vigentes está dispensado do recolhimento do IBS e da CBS. Também ficam dispensados os contribuintes para os quais não haja obrigação acessória definida.

A alíquota do período de teste é de 1% no total, sendo 0,9% de CBS e 0,1% de IBS, conforme o Comitê Gestor do IBS.

Repare que a dispensa é condicionada, e a condição é emitir conforme as normas. Ela não vem de o tributo ser pequeno em 2026, vem de o documento estar certo. É por isso que vale acertar o preenchimento agora, enquanto o erro ainda custa pouco.

## Se você atende como autônomo, um detalhe muda

Quando a NFS-e é emitida por profissional autônomo, a identificação de quem emite pode continuar sendo feita pelo CPF. A SE/CGNFS-e classifica a regra como transitória, válida até que seja disponibilizado o CNPJ técnico com natureza jurídica própria para pessoas físicas equiparadas.

Isso convive com outra mudança do mesmo ano: a partir de julho de 2026, as pessoas físicas que sejam contribuintes da CBS e do IBS devem se inscrever no CNPJ. A Receita esclarece que a inscrição não transforma a pessoa física em jurídica e serve apenas para facilitar a apuração dos dois tributos.

## O que precisa sair do sistema, e por quê

O paciente deduz o tratamento odontológico do imposto de renda sem limite de valor, e quem decide se ele consegue é o documento que a sua clínica entregou. A Receita Federal lista o que os comprovantes precisam conter:

- **Descrição dos serviços.** Não "tratamento odontológico", mas o que foi feito. É o campo que mais falha quando o sistema junta tudo numa linha só.
- **Nome, endereço e número de CPF ou CNPJ do prestador.**
- **Identificação do responsável pelo pagamento e do beneficiário dos serviços.** São dois campos, não um.
- **Data de emissão**, exigida quando o documento não é nota fiscal.
- **Assinatura do prestador**, também só quando não é nota fiscal.

Os dois últimos itens explicam por que a nota fiscal simplifica a vida de todo mundo: ela já carrega data e autoria por construção, enquanto o recibo depende de alguém lembrar de assinar.

O terceiro item é o que quebra na prática. Quem paga e quem é atendido são pessoas diferentes com frequência, no tratamento do filho, do pai idoso, do cônjuge. Se o sistema só guarda o nome do paciente, alguém vai reemitir documentos em fevereiro.

![Orçamento de um paciente com os tratamentos linha a linha, primeira consulta e endodontia molar, com valor por item e total](/screenshots/budgets.png)

*Os tratamentos discriminados um a um, com valor por item, total e o plano de tratamento vinculado.*

## A Dmed fecha o ciclo no começo do ano seguinte

A Dmed é a Declaração de Serviços Médicos e de Saúde, e a obrigação é da pessoa jurídica ou da pessoa física equiparada a jurídica que presta serviços de saúde. Dentistas estão expressamente entre os profissionais alcançados, e serviços de próteses dentárias também.

O que ela informa é justamente o par que o comprovante já tinha que separar: nome completo e CPF do beneficiário do serviço e de quem efetuou o pagamento. Para menores de 18 anos sem CPF, entram nome completo e data de nascimento.

A Dmed 2026 teve prazo de entrega de 2 de janeiro a 27 de fevereiro de 2026, e a base legal é a Instrução Normativa RFB nº 2.074/2022. A entrega fora do prazo tem multa.

> **A Dmed não é uma tarefa de fevereiro, é o retrato de doze meses de emissão.** A orientação da Receita sobre malha fiscal pede ao contribuinte todos os comprovantes das despesas médicas declaradas, inclusive as que constam na Dmed. Quem emitiu de qualquer jeito durante o ano descobre isso quando o paciente liga.

## Três coisas para conferir no seu município

1. **Se o município aderiu e parametrizou o padrão nacional.** A SE/CGNFS-e publica a lista dos pendentes e lembra que a Lei Complementar 214/2025 prevê bloqueio de transferências voluntárias para quem não cumprir. Enquanto isso não se resolve, a emissão local pode continuar diferente do resto do país.
2. **A alíquota e o código do serviço.** São municipais, e o código errado no cadastro é a causa mais comum de nota emitida com o imposto errado.
3. **O leiaute e a data local.** São Paulo, por exemplo, informou que a partir de 1º de agosto de 2026 a NFS-e deve ser emitida no leiaute com os novos campos de IBS e CBS, ficando o leiaute anterior disponível apenas para emissão retroativa. A data nacional para preencher esses campos e a data municipal para adotar o leiaute são coisas diferentes, e é o seu município que responde pela segunda.

O Dentalpin cobre a parte de cima dessa lista, a da clínica: agenda, prontuário, odontograma, orçamentos discriminados por tratamento e o registro de faturamento com número, data, valor e situação de cada documento, que é de onde saem os dados que depois viram nota. O que ele não faz hoje, e é melhor dizer antes de você instalar para descobrir: **não emite NFS-e no ambiente nacional nem preenche o destaque de IBS e CBS**, então a emissão continua saindo do Emissor Nacional ou do sistema do seu município. É código aberto e gratuito, e a [página de preços](/pt-br/precos/) é curta.

## Fontes

Tudo abaixo foi consultado em 7 de agosto de 2026.

- [CGNFS-e orienta sobre os prazos para destaque de IBS/CBS nas notas fiscais de serviço](https://www.gov.br/nfse/pt-br/noticias/cgnfs-e-orienta-sobre-os-prazos-para%20destaque-de-ibs-cbs-nas-notas-fiscais-de-servico), SE/CGNFS-e, publicado em 7 de agosto de 2026, de onde saem as datas de 1º de outubro, 1º de dezembro e 1º de janeiro de 2027, a não rejeição até 31 de dezembro de 2026 e a identificação do autônomo pelo CPF.
- [NFS-e e Simples Nacional: obrigatoriedade de emissão através do Emissor Nacional](https://www.gov.br/nfse/pt-br/noticias/nfs-e-e-simples-nacional-obrigatoriedade-de-emissao-atraves-do-emissor-nacional), portal da NFS-e, publicado em 28 de abril de 2026, sobre a Resolução CGSN nº 189/2026.
- [Municípios sem adesão ou parametrização da NFS-e já estão sujeitos a bloqueio de transferências](https://www.gov.br/nfse/pt-br/noticias/municipios-sem-adesao-ou-parametrizacao-da-nfs-e-ja-estao-sujeitos-a-bloqueio-de-transferencias), SE/CGNFS-e, publicado em 13 de maio de 2026, com referência ao art. 62 da Lei Complementar nº 214/2025.
- [Orientações da Reforma Tributária para 2026](https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/acoes-e-programas/programas-e-atividades/reforma-tributaria-do-consumo/orientacoes-2026), Receita Federal, atualizado em 6 de maio de 2026, de onde saem a dispensa de recolhimento, a lista de documentos com destaque de CBS e IBS e a inscrição no CNPJ a partir de julho de 2026.
- [Novo marco da Reforma Tributária inicia no dia 03/08 com preenchimento de campos relativos ao IBS e à CBS](https://www.cgibs.gov.br/novo-marco-da-reforma-tributaria-inicia-em-03-de-agosto-com-preenchimento-obrigatorio-dos-campos-relativos-ao-ibs-e-a-cbs), Comitê Gestor do IBS, publicado em 15 de junho de 2026, de onde sai a alíquota de teste de 1%, com 0,9% de CBS e 0,1% de IBS.
- [Lei Complementar nº 116, de 31 de julho de 2003](https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp116.htm), art. 8º, II, art. 8º-A e os subitens 4.03, 4.12, 4.14 e 4.22 da lista anexa.
- [Despesas Médicas](https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/malha-fiscal/antecipacao/despesas-medicas), Receita Federal, atualizado em 18 de março de 2025, com os dados que o comprovante precisa conter e a menção à Dmed na malha fiscal.
- [Declarar serviços médicos e da saúde (Dmed)](https://www.gov.br/pt-br/servicos/declarar-servicos-medicos-e-da-saude), com o prazo da Dmed 2026 e a Instrução Normativa RFB nº 2.074/2022.
- [Dmed, perguntas frequentes](https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/perguntas-frequentes/dmed), Receita Federal, sobre quem entrega e os dados do beneficiário e de quem pagou.
- [Reforma Tributária: confira a data para início da emissão de nota com novos campos do IBS/CBS](https://prefeitura.sp.gov.br/web/fazenda/w/emissao-ibs-cbs), Secretaria Municipal da Fazenda de São Paulo, sobre o leiaute exigido a partir de 1º de agosto de 2026.

Isto não é orientação jurídica nem contábil. Prazos e leiautes da Reforma Tributária vêm mudando ao longo de 2026, as regras de ISS são do seu município, e a leitura que vale para a sua clínica é a do seu contador.
