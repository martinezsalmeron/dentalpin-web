---
title: "Dentalpin ou A2Odonto: quatro agentes de IA na mensalidade, contra o banco na sua mão"
description: "Comparativo com fontes: o A2Odonto publica R$ 126 e R$ 296/mês, hospedagem em São Paulo e exportação em JSON. O Dentalpin é open source e roda no seu servidor."
pubDate: 2026-10-19
tags: [comparacao, a2odonto, software-odontologico]
---

O A2Odonto publica três coisas que quase nenhum fornecedor deste mercado publica: o preço dos dois planos, o nome do provedor e a região onde o banco de dados da sua clínica fica, e uma página que põe o próprio produto numa tabela com cinco concorrentes, com link e data de leitura em cada célula. Isso muda a conversa de lugar.

Nós fazemos o Dentalpin, então não somos neutros. O que podemos ser é exatos.

> **Como ler este comparativo.** Tudo o que se afirma aqui sobre o A2Odonto sai de páginas que a própria empresa publica em `a2odonto.com.br`, com link e data no final: home com planos e perguntas frequentes, planos, segurança e LGPD, termos de uso e a página de comparativo. Os dados cadastrais do CNPJ vêm da base pública da Receita Federal. Nenhum blog agregador, nenhum diretório de software. E existe uma seção inteira sobre quando o A2Odonto é a escolha melhor, porque existe.

## Em trinta segundos

**O que o A2Odonto vende não é prontuário, é operação comercial com IA dentro da mensalidade.** São quatro agentes: um atende no WhatsApp 24 horas e agenda na agenda real, um passa pelo funil duas vezes por dia e retoma orçamento parado, um manda o resumo de gestão pela manhã e um resume a ficha do paciente antes da consulta. No plano Elite, R$ 296/mês no anual ou R$ 349 no mensal, com usuários ilimitados.

**O que eles têm e nós não temos é o Brasil e a camada comercial.** Tela em português, NFS-e, convênios, ponto eletrônico, consulta Serasa, Pix e boleto pelo Asaas, assinatura eletrônica no celular do paciente e migração automatizada de CAPIM, Codental e Simples Dental em 24 horas. Nada disso existe no Dentalpin hoje.

**A pergunta que decide é de quem é o banco de dados, e eles respondem a parte difícil dela.** A página de segurança nomeia AWS em São Paulo (região `sa-east-1`) operada pela Neon, a aplicação na Vercel, e diz que os recursos de IA enviam texto para a OpenAI e a Anthropic fora do Brasil. É mais informação do que o mercado inteiro deste comparativo publica junto. Ainda assim é o servidor deles. No Dentalpin o banco é seu desde o primeiro dia, e o preço é R$ 0 sem limite de pacientes, porque quem paga o servidor é você.

![Tela inicial do Dentalpin com as consultas de hoje, quem está na clínica, os pagamentos em atraso e os pacientes recentes](/screenshots/home.png)

*Tela inicial: consultas do dia, quem está na clínica, pagamentos em atraso e pacientes recentes.*

## O que é o A2Odonto

Um sistema de gestão odontológica em nuvem, que a própria home apresenta como "O primeiro Sistema Operacional de IA para clínica odontológica do Brasil". O rodapé é mais específico sobre o público: "Ecossistema de crescimento para clínicas de odontologia estética de alto ticket. Resultado primeiro."

A oferta pública tem dois planos, e a página é explícita sobre como o preço escala: "Preço por clínica, não por pessoa", com usuários ilimitados nos dois.

- **Pro SaaS**, R$ 126/mês no anual e R$ 149 no mensal. Agenda com bloqueios, prontuário digital com anamnese e odontograma, orçamentos e financeiro, WhatsApp conectado, marcado na página como "sem IA", lembretes automáticos 24h e 2h antes da consulta, CRM com funil odontológico de 8 estágios, dashboard de KPIs e painel de orçamentos com aprovação do paciente.
- **Elite SaaS**, R$ 296/mês no anual e R$ 349 no mensal, marcado como "Mais escolhido". Soma a IA atendente no WhatsApp 24/7, o Agente Revisor, o agente autônomo de gestão, o Copilot, SEO local e GEO, o A2 Smile Design com "Créditos limitados por mês", classificação automática de leads, chat com mídia, Meta Conversions API, engajamento pós-paciente, e também **gestão de convênios e nota fiscal eletrônica, ponto eletrônico, visualização 3D e consulta Serasa**.

Duas coisas valem destacar nessa divisão, porque mudam a conta. A primeira é que convênios e NFS-e, que numa clínica brasileira raramente são opcionais, estão só no Elite. A segunda é que as mensagens de WhatsApp estão incluídas: a própria página de comparativo deles aponta o preço por mensagem dos concorrentes e diz que no A2Odonto o WhatsApp fica "dentro da ficha do paciente, sem pacote de mensagens à parte".

A entrada é um "diagnóstico" gratuito, sem cartão, e só depois dele vêm as "72h de teste grátis em qualquer um dos dois planos, sem cartão". A cobrança roda pelo Asaas, em Pix, boleto ou cartão, e os termos dizem que dados de cartão "não são armazenados em nossos servidores". O suporte é e-mail, WhatsApp e telefone, "Em horário comercial". Os termos dizem "Buscamos uptime de 99,5%" e que incidentes que afetem dados são comunicados "em até 72h conforme Art. 48 LGPD".

Sobre quem assina o contrato, o rodapé publica a entidade: A2 CONSULTORIA EM TECNOLOGIA LTDA, CNPJ 68.258.209/0001-93, em Salvador/BA. A base pública da Receita Federal completa o quadro: situação ativa, porte microempresa, capital social de R$ 10.000, optante pelo Simples, e **início de atividade em 28 de julho de 2026**. Nenhuma página consultada publica número de clínicas atendidas, tamanho de equipe ou ano de fundação do produto.

> **Isso não é um defeito, é um dado que você precisa para ler a frase "cancele quando quiser".** A entidade existe, está ativa no cadastro e publica endereço, CNPJ e telefone, o que já separa o A2Odonto de fornecedor que não se encontra em registro nenhum. O que o cadastro diz é que a empresa foi registrada há menos de três meses, e isso é uma pergunta de continuidade, não uma crítica ao produto. Em software que guarda prontuário, essa pergunta importa tanto quanto a lista de recursos.

## O que é o Dentalpin

Software de gestão odontológica open source. Você baixa o código, instala onde quiser (seu servidor, o provedor de nuvem que preferir) e não paga licença por clínica, por dentista nem por paciente.

Odontograma, periodontograma com seis sítios por dente, agenda, prontuário eletrônico, planos de tratamento, orçamentos com assinatura, faturamento, pagamentos, radiografias e relatórios. Há módulos opcionais de lembretes automáticos, multi-clínica, WhatsApp Business e um agente de IA que executa tarefas sobre os seus dados reais respeitando as permissões de quem pergunta. Tudo exposto numa API REST documentada com OpenAPI.

É muito mais novo, e isso aparece. A interface hoje está em inglês e espanhol, não em português. Não existe módulo fiscal brasileiro: o Dentalpin não emite NFS-e, não fala com a Receita Saúde e não fatura convênio em guia. Também não tem controle de ponto, estoque, boleto, Pix, consulta a birô de crédito, agente de IA que atende paciente no WhatsApp nem aplicativo nas lojas, e o portal do paciente está marcado como "em breve", ou seja, hoje não existe.

![Ficha de paciente no Dentalpin com o odontograma, os alertas clínicos, o plano ativo e a próxima consulta](/screenshots/dental-chart.png)

*Ficha do paciente: odontograma, alertas clínicos, plano ativo e próxima consulta na mesma tela.*

## Cara a cara

Só linhas verificáveis. Onde não existe dado público, está dito.

| | A2Odonto | Dentalpin |
|---|---|---|
| Modelo | Assinatura em nuvem, dois planos | Open source (BSL 1.1 → Apache 2.0 depois de 4 anos) |
| Preço publicado | ✓ Sim, os dois planos na tela | ✓ R$ 0, tudo incluído |
| Entrada mais barata | R$ 149/mês no mensal, R$ 126 no anual | ✓ R$ 0 |
| Plano mais completo | R$ 349/mês no mensal, R$ 296 no anual | Não existem planos |
| Usuários inclusos | ✓ Ilimitados nos dois planos | ✓ Ilimitados |
| Limite de pacientes | ✓ Nenhum nas páginas consultadas | ✓ Nenhum |
| Taxa de implantação | ✓ Não há, pela própria página | ✓ Não existe |
| Fidelidade | ✓ "sem fidelidade" no mensal | ✓ Não existe contrato |
| Teste | ~ 72h, e só depois do diagnóstico | ✓ Demo pública, sem instalar |
| Interface em português | ✓ Sim | ✗ Não, hoje inglês e espanhol |
| Suporte em português | ✓ WhatsApp, e-mail e telefone | ~ Comunidade no GitHub |
| Horário do suporte | ~ "Em horário comercial" | ~ Comunidade, sem horário |
| Nada para administrar | ✓ 100% navegador, sem servidor | ✗ Alguém cuida da máquina |
| Prontuário eletrônico | ✓ Sim | ✓ Sim |
| Odontograma | ✓ Com faceograma | ✓ Sim |
| Periodontograma | ✗ Não aparece nas páginas consultadas | ✓ Seis sítios por dente |
| Anamnese digital | ✓ O paciente responde antes da consulta | ✓ Histórico clínico |
| Evolução por voz | ✓ Transcrição por IA | ✗ Não existe |
| Assinatura eletrônica | ✓ Contrato e termo pelo celular | ✓ Orçamento com assinatura |
| Plano de tratamento | ✓ Sim | ✓ Sim |
| Radiografias e imagem | ✓ Anexos na ficha | ✓ Módulo no core |
| IA que atende o paciente no WhatsApp | ✓ Incluída no Elite, 24/7 | ✗ Não existe |
| IA que organiza o funil comercial | ✓ Agente Revisor, 2× por dia | ✗ Não existe |
| CRM e funil do paciente | ✓ 8 estágios, com dashboard | ✗ Não existe |
| Agente de IA sobre os seus dados | ✓ Copilot em todo o sistema | ~ Módulo opcional, no provedor que você configurar |
| Convênio: gestão | ~ Só no Elite | ✗ Não existe |
| Padrão TISS | ✗ Não mencionado nas páginas consultadas | ✗ Não existe |
| NFS-e | ~ Só no Elite | ✗ Não emite |
| Receita Saúde | ✗ Não mencionada nas páginas consultadas | ✗ Não existe |
| Pix, boleto e cartão | ✓ Pelo Asaas, dentro do sistema | ✗ Não publicamos |
| Mensagens de WhatsApp | ✓ Incluídas, sem pacote à parte | ~ Módulo WhatsApp Business |
| Comissão a profissionais | ✓ Sobre o que realmente entrou | ✓ Comissionamento por profissional |
| Custo e margem por procedimento | ✓ Sim | ~ Relatórios de produção |
| Estoque | ✓ Baixa por atendimento | ✗ Não existe |
| Ponto eletrônico | ✓ Só no Elite | ✗ Não existe |
| Consulta a birô de crédito | ✓ Serasa, no Elite | ✗ Não existe |
| Filiais | ✗ Não tratadas nas páginas consultadas | ✓ Módulo multi-clínica |
| Portal do paciente | ✗ Não aparece nas páginas consultadas | ✗ Marcado "em breve" |
| Aplicativo nas lojas | ✗ Não mencionado nas páginas consultadas | ✗ Não existe |
| Funciona sem internet | ✗ Sistema web | ~ Na sua rede, se o servidor é seu |
| Onde ficam os dados | ✓ AWS São Paulo (`sa-east-1`) via Neon, app na Vercel | ✓ Onde você decidir |
| Texto enviado a provedor fora do Brasil | ✗ Sim, OpenAI e Anthropic, nos recursos de IA | ~ Só se você ativar o módulo |
| Registro de quem abriu a ficha | ✓ Abriu, alterou, exportou e excluiu | ~ Depende da sua instalação |
| Senhas em hash | ✓ bcrypt | ~ Depende da sua instalação |
| Credenciais cifradas | ✓ AES-256-GCM | ~ Depende da sua instalação |
| SLA de disponibilidade | ~ "Buscamos uptime de 99,5%", nos termos | ✗ Sem SLA: o servidor é seu |
| Certificação ISO ou SOC 2 | ✗ Não mencionada nas páginas consultadas | ~ A conformidade é da sua instalação |
| Autenticação em dois fatores | ✗ Não mencionada nas páginas consultadas | ✗ Não publicamos |
| Papéis LGPD definidos | ✓ Clínica controladora, A2Odonto operadora | A clínica é a única controladora |
| Encarregado nomeado | ✓ DPO com e-mail e prazo de 15 dias úteis | A clínica é a única controladora |
| Operadores nomeados | ✓ Neon, Vercel, Asaas, OpenAI e Anthropic | ✓ Nenhum, os dados não saem de você |
| Exportação dos dados | ✓ JSON completo, no painel, a qualquer momento | ✓ O banco é seu, quando quiser |
| Dados após o cancelamento | ~ 90 dias e depois eliminados | ✓ Continuam na sua máquina |
| Importação do sistema atual | ✓ CAPIM, Codental e Simples Dental, em 24h | ~ Módulo de importação por arquivo |
| Código para auditar | ✗ Não | ✓ Publicado no GitHub |
| API pública documentada | ✗ Não publicada nas páginas consultadas | ✓ REST completa, com OpenAPI |
| Base instalada publicada | ✗ Nenhum número em página nenhuma | ✗ Também não publicamos |

As linhas de IA, de fiscal e de meio de pagamento são as que pesam numa clínica brasileira que vive de captação, e são linhas que nós perdemos inteiras. Vale ler essas antes da linha do preço.

> **O preço anual deles tem uma condição que a linha "R$ 126/mês" não carrega.** A página de planos diz que no anual "os 12 meses são pagos de uma vez, com 15% de desconto", e oferece "Em até 12x no cartão". Ou seja, o valor por mês mais baixo vem com um compromisso de doze meses, enquanto o "sem fidelidade" das perguntas frequentes é descrito no plano mensal, a R$ 149 e R$ 349. Pergunte por escrito o que acontece se você cancelar um anual no quarto mês, porque nenhuma página consultada responde isso.

![O agente de IA do Dentalpin com a lista de fluxos de trabalho disponíveis](/screenshots/ai-copilot.png)

*O agente de IA do Dentalpin, que é um módulo opcional. A interface está em inglês, como o resto do sistema hoje.*

## As duas coisas que eles dizem de dois jeitos

Aparecem nas páginas deles e não resolvem entre si, então aqui vão as duas versões:

- **De quantos sistemas a importação é automatizada.** As perguntas frequentes da home dizem "A importação de CAPIM e Simples Dental é automatizada". A página de planos e a de segurança dizem "a importação de CAPIM, Codental e Simples Dental é automatizada", e a de segurança acrescenta que "pacientes e lançamentos de outros sistemas entram por planilha". Duas páginas contra uma, e a lista maior é a que está nas páginas mais recentes. Se você vem do Codental, confirme por escrito antes de assinar.
- **Quanto dura o diagnóstico que libera o teste.** A home e as perguntas frequentes dizem dois minutos; a página de planos diz cinco. É detalhe, e é o tipo de detalhe que mostra que as duas páginas foram escritas em momentos diferentes, o que vale lembrar ao ler qualquer número nelas.

## A página que quase ninguém publica

Vale dizer com clareza, porque é incomum neste mercado: o A2Odonto publica uma página de segurança e LGPD que responde a pergunta que praticamente nenhum concorrente responde. Ela nomeia onde os dados ficam, com provedor e região: o banco em São Paulo, na AWS `sa-east-1`, operado pela Neon; a aplicação na Vercel, também em São Paulo; fotos, radiografias e documentos no armazenamento de arquivos da Vercel.

Na mesma página eles declaram o que sai do país: "Os recursos de inteligência artificial do sistema (...) enviam o texto necessário para provedores de IA (OpenAI e Anthropic), fora do Brasil." Esse é um fato que a clínica precisa pesar como controladora dos dados, e é um fato que a maioria dos fornecedores simplesmente não coloca no papel.

A mesma página descreve a saída, que é a parte que decide uma troca de sistema: o administrador pode exportar "a qualquer momento", num "único arquivo em formato aberto (JSON) com cadastro, usuários, pacientes, agendamentos, prontuários, financeiro, conversas de WhatsApp e histórico da assinatura", com os anexos como links e as credenciais de fora. Há exportação por paciente para atender pedido de acesso ou portabilidade, e o financeiro sai em CSV. Depois do cancelamento, "os dados ficam guardados por 90 dias para recuperação e então são eliminados".

Noventa dias é um prazo, e um prazo é melhor do que silêncio: a maior parte dos fornecedores desta série não publica nenhuma regra sobre o que acontece com o seu prontuário depois que a assinatura para. Ao mesmo tempo, prontuário odontológico é documento de guarda longa no Brasil, e noventa dias não é guarda longa.

É a janela para você exportar, não para o sistema guardar por você. A própria página diz isso com a frase "exporte antes de cancelar".

E vale um segundo crédito, do tipo que costuma faltar: eles publicam uma página comparando o A2Odonto com Codental, Clinicorp, Simples Dental, Capim e Dental Office, com doze critérios iguais para todos, o link da página de origem de cada dado e a data da leitura em cada célula. A página diz, no começo, que é publicada por um dos comparados. É o mesmo método que usamos aqui, e é raro ver um fornecedor assumindo isso por escrito.

## Escolha o A2Odonto se

E isto não é formalidade, porque em várias situações a escolha é óbvia:

- **O seu gargalo é comercial, não clínico.** Se o problema da clínica é orçamento apresentado que não fecha e paciente que escreve às 23h e não recebe resposta, os quatro agentes atacam exatamente isso, e nada no Dentalpin ataca. Essa é a diferença central entre os dois produtos.
- **Você emite NFS-e ou gerencia convênios.** Está no plano Elite, e o Dentalpin não [emite nota fiscal](/pt-br/blog/nota-fiscal-clinica-odontologica/) nem [fatura convênio](/pt-br/blog/faturar-convenios-odontologicos/) no Brasil.
- **Você precisa receber por Pix, boleto e cartão dentro do sistema.** Está lá, pelo Asaas, e não está na nossa lista.
- **Você quer a tela em português e a equipe treinada sem contar licenças.** Interface em português, usuários ilimitados nos dois planos e preço por clínica, não por pessoa.
- **Você vem do CAPIM, do Codental ou do Simples Dental.** A importação é automatizada e eles publicam o prazo em horas, o que é mais do que a maioria faz.
- **Você não quer administrar máquina nenhuma.** Nossa oferta de R$ 0 pressupõe alguém que cuide do servidor, das atualizações e do backup. A deles não, e eles publicam quem cuida e onde.

## Escolha o Dentalpin se

- **Você quer o banco de dados na sua mão.** Eles publicam o provedor e a região, e isso é mérito real. Ainda assim é o servidor deles, e a [exportação](/pt-br/blog/exportar-dados-do-software/) é um recurso do painel, não a propriedade do banco.
- **Prontuário não pode sair do país, nem em pedaço de texto.** A página deles diz que os recursos de IA enviam texto para a OpenAI e a Anthropic fora do Brasil. Se essa é uma linha que a sua clínica não cruza, no Dentalpin o módulo de IA só existe se você ativar, e o provedor é o que você configurar.
- **Você faz periodontia a sério.** Periodontograma com seis sítios por dente, e a palavra periodontograma não aparece em nenhuma página deles.
- **Você tem filiais.** Nós temos módulo multi-clínica, e nenhuma página consultada deles trata de unidades, caixa por filial ou escopo de acesso por unidade.
- **Você quer integrar com outro sistema.** API REST documentada com OpenAPI, contra uma oferta onde a única API citada é a Meta Conversions API, que serve para mandar eventos de anúncio, não para ler os seus dados.
- **Você quer auditar o que roda na sua clínica.** O código está publicado, e [a licença](/pt-br/blog/licenca-bsl-explicada/) vira Apache 2.0 quatro anos depois de cada versão.
- **Continuidade do fornecedor é um critério seu.** O CNPJ deles tem início de atividade em julho de 2026. Com código aberto, se o fornecedor desaparecer o sistema continua rodando, porque ele já está na sua máquina.

## Como seria migrar

A boa notícia é que a saída deles está descrita, o que torna este roteiro mais curto do que o de quase todos os outros comparativos desta série:

1. **Exporte com a conta ativa.** No painel, em "Meus dados e LGPD", gere o arquivo JSON completo. Faça isso antes de cancelar qualquer coisa, porque depois do cancelamento a janela publicada é de 90 dias.
2. **Baixe os anexos.** No arquivo JSON "os anexos aparecem como links", e link de armazenamento não é o arquivo. Radiografia e foto precisam vir como arquivo, e isso é um passo separado.
3. **Exporte o financeiro em CSV também.** É o formato que o seu contador vai conseguir conferir linha a linha.
4. **Guarde as conversas de WhatsApp.** Elas entram na exportação, e numa reclamação futura o histórico de combinação com o paciente é prova.
5. **Suba o arquivo** no módulo `migration_import`, que valida tudo antes de escrever qualquer coisa.
6. **Veja o preview**, com contagens e linhas de amostra. Nada foi gravado ainda.
7. **Revise as propostas.** O sistema mapeia o catálogo de procedimentos de origem contra o seu e você decide linha por linha: aceitar, revincular, criar novo ou ignorar. O que pontua acima de 0,9 é aceito em bloco.
8. **Execute**, e a importação roda respeitando as suas decisões.

O passo 7 é onde quase toda migração falha. Duas clínicas nunca codificam os procedimentos do mesmo jeito, e uma equivalência adivinhada em silêncio produz cobrança errada que ninguém percebe até meses depois.

## O que é honesto dizer

Para uma clínica de estética odontológica que vive de captação e tem o gargalo no comercial, o A2Odonto hoje resolve mais do que o Dentalpin, e resolve uma coisa que nós não resolvemos de jeito nenhum. Se o seu problema é orçamento apresentado que ninguém retoma e paciente que escreve fora do horário e não é respondido, a nossa lista de recursos não tem resposta para isso. Se você emite NFS-e ou gerencia convênio, também não há comparação a fazer: é eles.

Eles também merecem crédito por duas coisas que o resto deste mercado não faz: publicar o provedor e a região onde o seu banco de dados fica, inclusive o que é enviado para fora do país, e publicar um comparativo com fonte e data em cada célula dizendo que é parte interessada.

O que a gente acha que você deve perguntar a eles, e não a nós: o que acontece se você cancelar um plano anual no meio, já que os doze meses são pagos de uma vez; se a importação do Codental é automatizada ou entra por planilha, porque as duas páginas discordam; com que frequência o backup roda e se a restauração já foi testada; se é possível usar o sistema sem que nenhum texto vá para provedor de IA fora do Brasil; se existe autenticação em dois fatores; e se há previsão de TISS, Receita Saúde e caixa por filial.

O Dentalpin é a aposta oposta: o software da clínica não deveria ser uma caixa preta alugada, e preço, código e dados deveriam estar à vista desde antes da primeira conversa. Ele é mais novo e isso aparece, e no fiscal, no comercial e na tela em português eles hoje fazem mais. Você pode [testar a demo](https://demo.dentalpin.com) sem instalar nada, [ver os preços](/pt-br/precos/) ou [subir o sistema no seu servidor em três minutos](/pt-br/blog/instalar-dentalpin-em-tres-minutos/) e julgar por conta própria. Se o que você procura é o que existe de graça no Brasil, o [levantamento dos gratuitos](/pt-br/blog/software-odontologico-gratuito/) compara as ofertas lado a lado.

## Fontes

Páginas do próprio A2Odonto, todas consultadas em 19 de outubro de 2026:

- [A2Odonto](https://a2odonto.com.br/): "O primeiro Sistema Operacional de IA para clínica odontológica do Brasil", "Começa com o diagnóstico de 2 minutos — sem cartão", "IA ativa 24/7 · Migração em 24h · Cancela quando quiser, sem multa"; os quatro agentes (Assistente Virtual que "atende no WhatsApp, 24 horas", Agente Revisor que "Duas vezes por dia passa pelas conversas paradas", Agente de gestão e "Copilot do dentista"); a lista de recursos com "Prontuário com odontograma", "faceograma", "Anamnese digital", "Evolução por voz", "Assinatura eletrônica", "Nota fiscal eletrônica", "Comissão automática", "Custo e margem", "Estoque sem planilha", "Controle de convênios", "Consulta Serasa", "Marcação de ponto", "Visualização 3D da situação dentária", "Multi-usuário ilimitado" e "Ver todos os outros 31 recursos"; os planos "Pro SaaS R$ 126/mês" e "Elite SaaS R$ 296/mês" com "Em até 12x no cartão", "Você economiza R$ 276 por ano" e "R$ 636 por ano", "Preço por clínica, não por pessoa", "No anual sai 15% mais barato" e "* Créditos limitados por mês"; e as perguntas frequentes com "Está no plano Elite, R$ 349/mês, sem cobrança por mensagem", "O Pro SaaS (R$ 126/mês no anual, R$ 149 no mensal)", "O Elite SaaS (R$ 296/mês no anual, R$ 349 no mensal)", "você ganha 72h de teste grátis em qualquer um dos dois planos, sem cartão", "Cancelamento a qualquer momento, sem multa e sem fidelidade", "os usuários são ilimitados em qualquer plano", "A importação de CAPIM e Simples Dental é automatizada, e a migração leva 24h", "a média de entrega é 4 horas, com teto de 24" e "O prontuário continua sendo seu; a gente é o operador, não o dono da informação". Rodapé: "A2 CONSULTORIA EM TECNOLOGIA LTDA · CNPJ 68.258.209/0001-93", "Salvador Shopping Business, Torre América, salas 911 e 912 — Salvador/BA", suporte "Em horário comercial". Sem número de clínicas atendidas, sem aplicativo nas lojas e sem API para clientes.
- [Planos](https://a2odonto.com.br/planos): "Plano mensal sem fidelidade: cancele quando quiser, sem multa", o anual com "os 12 meses são pagos de uma vez, com 15% de desconto", "Teste grátis de 72 horas, sem cartão, depois do diagnóstico", "Usuários ilimitados nos dois planos", "a importação de CAPIM, Codental e Simples Dental é automatizada", "A migração dos dados leva 24 horas", "A implantação é feita com você, e o treinamento é da equipe inteira, não só do dono", o diagnóstico descrito como de cinco minutos, e o pagamento por "Pix, boleto ou cartão de crédito, na página segura do Asaas". Sem taxa de implantação, sem requisitos de sistema e sem menção a aplicativo.
- [Segurança e LGPD](https://a2odonto.com.br/seguranca), com "Última atualização: 3 de outubro de 2026": "O banco de dados da clínica fica em São Paulo, na infraestrutura da AWS (região sa-east-1), operado pela Neon. A aplicação roda na Vercel, também na região de São Paulo", "Os recursos de inteligência artificial do sistema (...) enviam o texto necessário para provedores de IA (OpenAI e Anthropic), fora do Brasil", "Senhas são guardadas apenas em forma de hash (bcrypt)", "Credenciais de integração (...) são guardadas cifradas (AES-256-GCM)", "O sistema registra quem abriu, alterou, exportou ou excluiu a ficha de cada paciente", "um único arquivo em formato aberto (JSON) com cadastro, usuários, pacientes, agendamentos, prontuários, financeiro, conversas de WhatsApp e histórico da assinatura", "os anexos aparecem como links", "a importação de CAPIM, Codental e Simples Dental é automatizada, e pacientes e lançamentos de outros sistemas entram por planilha", "Depois do cancelamento, os dados ficam guardados por 90 dias para recuperação e então são eliminados", a clínica como controladora e a A2Odonto como operadora, e o encarregado com prazo de resposta "até 15 dias úteis". Sem certificação externa citada e sem autenticação em dois fatores citada.
- [Termos de Uso](https://a2odonto.com.br/sistema/termos), versão 1, "Última atualização: 30 de maio de 2026": "plataforma SaaS de gestão e prontuário odontológico", a clínica como Controladora e o A2Odonto como Operador "conforme Art. 5º da Lei 13.709/2018", "O plano contratado renova mensalmente via cartão de crédito processado por gateway certificado (Asaas)", "Dados de cartão não são armazenados em nossos servidores", "Buscamos uptime de 99,5%", incidentes comunicados "em até 72h conforme Art. 48 LGPD", "Atendimento horário comercial" e foro de Salvador/BA.
- [Comparativo de sistemas odontológicos](https://a2odonto.com.br/comparativo-sistemas-odontologicos): doze critérios aplicados a Codental, Clinicorp, Simples Dental, Capim, Dental Office e A2Odonto, com link e data de consulta em cada célula; "Incluídas. O WhatsApp fica dentro da ficha do paciente, sem pacote de mensagens à parte"; "Não há taxa obrigatória de implantação"; "Automatizada, em 24h"; e a resposta "Ela está publicada pela A2Odonto, que é um dos sistemas comparados, e isso está dito no começo da página". Sem menção a TISS em nenhuma célula.

Dado cadastral, de fonte oficial:

- [Cadastro Nacional da Pessoa Jurídica, dados públicos da Receita Federal](https://minhareceita.org/68258209000193), consultado em 19 de outubro de 2026: CNPJ 68.258.209/0001-93, razão social "A2 CONSULTORIA EM TECNOLOGIA LTDA", nome fantasia "A2 INOVACAO E GESTAO", situação cadastral ATIVA, porte MICRO EMPRESA, capital social R$ 10.000, início de atividade em 28 de julho de 2026, município Salvador (BA), optante pelo Simples, CNAE "Desenvolvimento e licenciamento de programas de computador não-customizáveis".

Sobre o Dentalpin:

- [Licença do Dentalpin](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) e [código-fonte](https://github.com/martinezsalmeron/dentalpin).
