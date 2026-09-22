---
title: "Dentalpin ou Prontuário Verde: o que muda de verdade para a sua clínica"
description: "Comparativo com fontes: o Prontuário Verde publica um preço de entrada, limita profissionais e guarda as APIs no plano de cima. O Dentalpin é open source."
pubDate: 2026-09-22
tags: [comparacao, prontuario-verde, software-odontologico]
---

O Prontuário Verde publica um preço na página de planos, e isso já responde metade da pergunta de quem está comparando. A outra metade está nas três palavras antes do número, "a partir de", e no fato de que dos três planos apenas esse tem valor publicado.

Nós fazemos o Dentalpin, então não somos neutros. O que podemos ser é exatos.

> **Como ler este comparativo.** Tudo o que se afirma aqui sobre o Prontuário Verde sai de páginas que a própria OVYVA publica, com link e data no final: site, planos, termos de uso, política de privacidade, página de desenvolvedores e central de ajuda. Nenhum blog agregador. E tem uma seção inteira sobre quando eles são a escolha certa, porque no Brasil ela existe e pesa.

## Em trinta segundos

**Prontuário Verde** é uma plataforma em nuvem para clínicas odontológicas, médicas e estéticas, construída em torno do WhatsApp e de cinco agentes de IA. Ela cobre o circuito que uma clínica brasileira precisa fechar todo mês: convênios com guias e lote no padrão ANS/TISS, nota fiscal, boleto e um modelo de exportação documentado tabela por tabela.

**Dentalpin** é open source e gratuito, sem mensalidade por cadeira, por dentista ou por paciente, com o código publicado e os dados no servidor que você escolher. Em troca, é de 2026, alguém precisa cuidar da máquina e ele não fatura convênio nem emite nota fiscal brasileira.

A pergunta não é qual é melhor. É se a sua clínica vive de convênio e de WhatsApp, ou se o que trava você é a conta crescer toda vez que entra um dentista novo.

![Tela inicial do Dentalpin com as consultas do dia, quem está na clínica, pagamentos vencidos e pacientes recentes](/screenshots/home.png)

*A tela inicial do Dentalpin, com os dados de demonstração que vêm na instalação.*

## O que é o Prontuário Verde

Software em nuvem publicado pela OVYVA SOFTWARE LTDA, CNPJ 35.110.461/0001-00, com sede na Rua Bento Gonçalves, 806/204, em São Leopoldo, no Rio Grande do Sul, conforme os próprios termos de uso. O rodapé do site cita dois endereços, Porto Alegre (Instituto Caldeira) e Miami, e a página Sobre Nós data a ideia de 2019 e o primeiro cliente de 2020.

O produto se vende para três verticais ao mesmo tempo, "clínicas odontológicas, médicas e estéticas", e isso é uma diferença real a declarar, não um defeito. O número que aparece no topo do site é "+35 mil profissionais de saúde", e a palavra ali é profissionais: nenhuma contagem de clínicas aparece nas páginas consultadas.

Na parte clínica, a tabela de planos nomeia prontuário com validade jurídica, assinatura digital ilimitada, receitas digitais, armazenamento de exames, odontograma, planos de tratamento, anamnese online e teleconsultas ilimitadas. No financeiro, contas a receber e a pagar, controle de orçamentos, emissão de boletos, comissões de profissionais e controle de estoque.

**A parte de convênios é a mais concreta do conjunto.** A central de ajuda deles descreve o faturamento com guias, glosas e conferência, e diz que "o arquivo enviado ao convênio é um XML de lote de guias no padrão ANS/TISS 3.05.00". Isso é o tipo de detalhe que só quem implementou publica.

**Uma palavra não aparece em nenhuma página consultada: periodontograma.** Odontograma aparece em todos os planos e a busca da própria central de ajuda não retorna nada para periodontograma. Para uma clínica com periodontia rotineira, essa é a primeira pergunta a fazer para eles.

Imagem também é um ponto a perguntar. As páginas consultadas nomeiam "armazenamento de exames" e não nomeiam integração com sensor, radiografia ou qualquer ponte de imagem.

## O que é o Dentalpin

Software de gestão odontológica open source. Você baixa o código, instala onde quiser e não paga licença por cadeira, por dentista ou por paciente.

Odontograma, periodontograma completo, agenda, prontuário eletrônico, planos de tratamento, orçamentos com assinatura, faturamento, pagamentos, lembretes de consulta e relatórios. Uma API REST documentada com OpenAPI, sem plano superior para liberar, e um agente de IA que executa tarefas sobre os seus dados reais respeitando as permissões de quem pergunta.

É muito mais novo, e no Brasil isso custa mais caro que em outros mercados, porque aqui o software da clínica também é a porta do convênio e da prefeitura.

![Ficha do paciente no Dentalpin com o odontograma, os alertas clínicos, o plano ativo e a próxima consulta](/screenshots/dental-chart.png)

*Ficha do paciente: odontograma, alertas clínicos, plano ativo e próxima consulta na mesma tela.*

## O preço publicado, e o que ele não diz

Publicar um número já é mais do que este mercado costuma fazer, e isso merece ser dito antes de qualquer ressalva. O que a página de planos publica é um plano com preço e dois sem.

- **CONECTADO**: "A partir de R$ 239,90 /mês".
- **INTELIGÊNCIA**: "Valores sob medida para a sua clínica".
- **VENDA+**: "Valores sob medida para a sua clínica", e é o plano marcado por eles como "MAIS CONTRATADO".

Ou seja, o plano que a própria empresa diz ser o mais contratado é um dos dois que não têm preço na página.

> **"Usuários ilimitados" é verdade, e não é a conta que interessa.** A central de ajuda deles tem uma seção chamada "O limite do plano: profissionais, não usuários", que explica: "A assinatura do Prontuário Verde limita a quantidade de profissionais de saúde ativos — não o total de usuários". Recepção, gerentes e vendedores não ocupam vaga, e ao passar do teto aparece a mensagem "O seu plano atual permite no máximo o cadastro de N profissionais". O mesmo artigo diz que "alguns planos são específicos por área", com recusa de cadastro de profissional de outro conselho.

Vale o mesmo cuidado com as unidades. A página de planos anuncia "Unidades de atendimento ilimitadas" nos três planos, enquanto os termos de uso dizem que "os Planos ofertados pelo Ovyva para uso do Prontuário Verde variam de acordo com o número de Unidades de Atendimentos contratados pelo Cliente". As duas frases são publicadas por eles, e a que vale no contrato é a segunda.

A tabela de recursos da mesma página mostra onde cada coisa mora, e aqui está a parte que mais muda a conta de uma clínica com equipe técnica:

- **Os cinco agentes de IA** (vendas e agendamento, copiloto do profissional, agente financeiro, planejador de tratamentos, evoluções por IA) começam no INTELIGÊNCIA, não no CONECTADO. Evolução por voz e insights financeiros por IA também.
- **As APIs abertas, o servidor MCP, as automações com n8n e Make e o CRM Verdesk** só aparecem no VENDA+. O FAQ de desenvolvedores confirma: "Para utilizar as APIs em produção é necessário ter um plano ativo do Prontuário Verde que contemple o uso de APIs".
- **Suporte por videochamada** também é exclusivo do VENDA+. Todos os planos têm e-mail e WhatsApp.
- **Emissão de nota fiscal e análise de crédito** não estão em plano nenhum: são serviços "Sob Demanda", sem preço publicado, embora a home venda "Nota fiscal integrada" como recurso.

A documentação da API é pública e gratuita, com endpoints REST, um servidor MCP para baixar e um limite declarado de "120 solicitações por minuto para cada cliente". É boa e é aberta para ler. Para usar em produção, é o plano de cima.

## Cara a cara

Só linhas verificáveis. Onde não há dado público, está dito.

| | Prontuário Verde | Dentalpin |
|---|---|---|
| Modelo | Assinatura em nuvem | Open source (BSL 1.1 → Apache 2.0 em 4 anos) |
| Implantação | Nuvem, navegador e aplicativo | Seu servidor, seu provedor ou local |
| Preço publicado | ~ Só o plano de entrada, "a partir de R$ 239,90/mês" | ✓ R$ 0, tudo incluído |
| O que o plano limita | Profissionais de saúde ativos e conselho de classe | ✓ Nada |
| Odontograma | ✓ Em todos os planos | ✓ Incluído |
| Periodontograma | ✗ Não aparece nas páginas consultadas | ✓ Incluído |
| Convênios e TISS | ✓ Guias e lote XML no padrão ANS/TISS 3.05.00 | ✗ Sem módulo brasileiro |
| NFS-e | ~ Serviço sob demanda, sem preço publicado | ✗ Não emite |
| Agentes de IA | ~ Cinco, a partir do plano INTELIGÊNCIA | ✓ Agente incluído, sem plano superior |
| API em produção | ~ Documentação pública, uso só no VENDA+ | ✓ REST com OpenAPI, sem plano |
| Servidor MCP | ✓ Publicado e pronto para uso | ✗ Não publicamos |
| Onde ficam os dados | Nenhum provedor, região ou país nomeado | ✓ Onde você decidir |
| Código auditável | ✗ Não | ✓ Publicado no GitHub |
| Disponibilidade | ✗ Sem uptime; restauração em até 48 horas | ~ Depende do seu servidor |
| Exportação de saída | ✓ 16 tabelas documentadas, com anexos | ✓ O banco é seu |
| Tempo de mercado | ✓ Produto desde 2019 | ✗ Desde 2026 |
| Base declarada | ✓ "+35 mil profissionais de saúde" | ✗ Muito poucos ainda |
| Suporte | ✓ E-mail e WhatsApp; vídeo no VENDA+ | ✗ Telegram e GitHub |

Duas linhas dessa tabela merecem o texto do contrato, não um resumo.

> **O compromisso de disponibilidade é de 48 horas, não de uptime.** Os termos de uso dizem que, em caso de indisponibilidade por falha técnica no centro de processamento de dados, a Ovyva "se compromete em restaurar o correto funcionamento do sistema em até 48 (quarenta e oito) horas após a identificação do problema". Não há percentual de disponibilidade publicado em nenhuma página consultada, nem crédito por indisponibilidade.

**E onde os dados moram não é dito.** A política de privacidade, atualizada em 25 de outubro de 2021, diz apenas que "os dados coletados serão armazenados em servidores destinados à tal finalidade" e que "os servidores de armazenamento são estruturados de acordo com a legislação vigente". Nenhum provedor de nuvem, região ou país aparece nas páginas consultadas, e o foro eleito é o da comarca de Novo Hamburgo, no Rio Grande do Sul.

## O contrato, que é onde moram as surpresas

Os termos de uso estão publicados na íntegra, com última atualização em 13 de dezembro de 2024, e isso já é mais do que boa parte deste mercado oferece. Quatro pontos valem a leitura antes de assinar.

1. **Fidelidade.** O plano mensal não tem fidelidade, segundo o FAQ da página de planos. O anual tem 12 meses.
2. **Arrependimento e reembolso.** Há garantia de 7 dias pelo Código de Defesa do Consumidor. Passado esse prazo, "não haverá reembolso, parcial ou total, dos valores pagos".
3. **Reajuste.** Os planos mensais são "reajustados anualmente de acordo com os critérios da Ovyva observados os índices inflacionários do período", avisados com 7 dias de antecedência do vencimento.
4. **Atraso.** Inadimplência superior a 2 dias consecutivos autoriza, "independentemente de qualquer notificação", suspender o suporte e bloquear o uso do software. Quitado o débito, são 2 dias úteis para desbloquear.

Na saída, o prazo é generoso e o gatilho é claro: no cancelamento, o cliente pode pedir a exportação dos dados em até 6 meses, com entrega em 10 dias, e depois disso "os dados poderão ser permanentemente excluídos pela Ovyva". O mesmo prazo de 6 meses vale para conta suspensa por falta de pagamento.

**O modelo de exportação é documentado melhor do que qualquer outro deste comparativo.** A central de ajuda lista 16 tabelas que saem, entre elas Paciente, Evolução, Plano de tratamento, Orçamento, Prescrição, Guias, Boletos, Contratos e termos e Anexos, e detalha coluna por coluna o que vem em cada uma. Isso é o oposto de uma saída trancada e merece ser dito com todas as letras.

![Periodontograma do Dentalpin com os seis pontos de sondagem por dente](/screenshots/periodontogram.png)

*O periodontograma do Dentalpin, com os seis sítios por dente e o registro de sangramento, recessão e profundidade.*

## Escolha o Prontuário Verde se

E isto vai a sério, não é formalidade:

- **A sua clínica fatura convênio.** Guias, glosas, conferência e lote XML no padrão ANS/TISS 3.05.00 estão descritos na documentação deles, e o Dentalpin não tem nada disso. Sozinho, esse item decide a maior parte dos casos no Brasil.
- **Você precisa emitir nota fiscal e boleto dentro do sistema.** Eles emitem, ainda que a nota fiscal seja serviço sob demanda. Nós não emitimos NFS-e, e o módulo fiscal que temos é espanhol e não serve aqui.
- **A recepção trabalha no WhatsApp.** Integração com a API oficial da Meta, bot de agendamento, confirmações automáticas e, nos planos de cima, um CRM conversacional inteiro em cima disso.
- **Você quer IA pronta e não quer montar nada.** Cinco agentes, inclusive um que escreve a evolução a partir da conversa da consulta. Os termos declaram que a assistente "é desenvolvida com base na inteligência da Open AI", o que pelo menos você sabe de antemão.
- **Você quer servidor MCP pronto.** Eles publicam um e nós não.
- **Não tem ninguém técnico e não quer ter.** O Dentalpin é instalado no seu servidor. Alguém precisa cuidar da máquina, das atualizações e do backup.

Seis anos de produto rodando com clínica de verdade resolvem problemas que a gente ainda nem sabe que existem.

## Escolha o Dentalpin se

- **Entra dentista novo todo ano.** O limite deles é por profissional de saúde ativo, e o nosso não existe: crescer a equipe não muda a conta.
- **Você quer integrar e automatizar por conta própria.** A nossa API REST documentada não depende de plano. A deles é pública para ler e exige o plano de cima para usar em produção.
- **Incomoda você que os prontuários morem onde não é você que decide.** Aqui quem escolhe são você e o seu servidor, e o país onde o dado fica é uma decisão sua e não uma pergunta sem resposta.
- **Periodontia é rotina na clínica.** O periodontograma com seis sítios por dente é padrão aqui, e não aparece nas páginas que eles publicam.
- **Você quer poder auditar o código** que guarda prontuário. Está publicado no GitHub.
- **O circuito de convênio e nota fiscal já vive fora do software.** Se a contabilidade emite as notas e o faturamento de convênio é feito por fora, o argumento mais forte do outro lado deixa de ser um argumento.

## Como seria a migração

Vale comparar as duas entradas, porque as regras são publicadas dos dois lados.

A importação deles aceita 19 sistemas nomeados, entre eles Clinicorp, Codental, Dental Office, Easy Dental Cloud, Simples Dental, Dentista Organizado e Clínica nas Nuvens, e traz pacientes, agenda, evoluções e financeiro. A própria página diz o que não vem: contas a pagar, estoque, prescrições e atestados e **anexos, isto é, imagens, exames e documentos**. Fora da lista de sistemas, só cadastro de pacientes por planilha Excel ou CSV.

Repare na assimetria, porque ela é deles e está publicada: anexos saem na exportação e não entram na importação.

No Dentalpin, o módulo `migration_import` importa através do [dental-bridge](https://github.com/dentaltix/dental-bridge), e não é um botão único de propósito:

1. **Suba o arquivo** e o sistema valida antes de mexer em qualquer coisa.
2. **Veja a prévia** com contagens e linhas de exemplo. Nada foi gravado ainda.
3. **Revise as propostas**: o sistema compara o catálogo de procedimentos de origem com o seu e você decide linha a linha (aceitar, religar, criar novo ou ignorar). O que pontua acima de 0,9 é aceito em bloco.
4. **Execute**, e a importação roda respeitando as suas decisões.

> **O passo 3 é onde quase toda migração falha.** Duas clínicas nunca codificam os procedimentos do mesmo jeito, e **uma equivalência adivinhada em silêncio vira cobrança errada que ninguém percebe durante meses**. Peça por escrito, a nós ou a qualquer fornecedor, exatamente o que entra e o que fica para trás.

## O que é honesto dizer

Para uma clínica brasileira que fatura convênio, emite nota e atende pelo WhatsApp, o Prontuário Verde entrega hoje coisas que o Dentalpin não entrega. Dizer de outro jeito seria vender um problema para você.

O que a gente faz diferente cabe em duas frases: o preço não sobe quando a equipe cresce, e a API não fica guardada no plano de cima. O Dentalpin é mais novo e isso aparece. Você pode [testar a demo](https://demo.dentalpin.com) sem instalar nada, [ver os preços](/pt-br/precos/) ou [subir o sistema no seu servidor em três minutos](/pt-br/blog/instalar-dentalpin-em-tres-minutos/) e julgar por conta própria.

## Fontes

Todas consultadas em 22 de setembro de 2026:

- [Prontuário Verde](https://prontuarioverde.com.br/): descrição do produto, as três verticais, "+35 mil profissionais de saúde", "4,9 · 122 avaliações no Google", os recursos de agenda, prontuário, financeiro, convênios, estoque e APIs, e a linha do tempo da empresa (2019, 2020, 2023, 2024). Os contadores da seção "Nossos números" não renderizam valor sem JavaScript e por isso não são citados aqui.
- [Planos](https://prontuarioverde.com.br/planos): "A partir de R$ 239,90 /mês" no CONECTADO, "Valores sob medida para a sua clínica" no INTELIGÊNCIA e no VENDA+, a marca "MAIS CONTRATADO" no VENDA+, "Usuários ilimitados", "Unidades de atendimento ilimitadas", a tabela de recursos por plano, os serviços "Sob Demanda" e o FAQ sobre fidelidade, suporte e exportação.
- [Desenvolvedores](https://prontuarioverde.com.br/desenvolvedores): APIs REST, servidor MCP, "Para utilizar as APIs em produção é necessário ter um plano ativo do Prontuário Verde que contemple o uso de APIs" e o limite de "120 solicitações por minuto para cada cliente".
- [Termos e Condições de Uso](https://prontuarioverde.com.br/termos-e-condicoes-de-uso): razão social e CNPJ, planos por unidade de atendimento, fidelidade anual de 12 meses, garantia de 7 dias e ausência de reembolso, reajuste, inadimplência e bloqueio, prazos de 6 meses e 10 dias para exportação, restauração em até 48 horas, Lei 14.063/2020 e a menção à OpenAI. Última atualização declarada: 13 de dezembro de 2024.
- [Política de Privacidade e Segurança](https://prontuarioverde.com.br/politica-de-privacidade-e-seguranca): armazenamento em "servidores destinados à tal finalidade", ausência de provedor ou país, contato do encarregado e foro de Novo Hamburgo. Última atualização declarada: 25 de outubro de 2021.
- [Usuários, perfis e permissões](https://centraldeajuda.prontuarioverde.com.br/configuracoes/usuarios-perfis-e-permissoes-guia-completo/): "O limite do plano: profissionais, não usuários" e as duas checagens de quantidade e classe de conselho.
- [Geração de guias e faturamento](https://centraldeajuda.prontuarioverde.com.br/financeiro/guia-completo-geracao-de-guias-e-faturamento/): guias, glosas e "XML de lote de guias no padrão ANS/TISS 3.05.00".
- [Como fazer a migração de dados](https://centraldeajuda.prontuarioverde.com.br/outros/como-fazer-a-migracao-de-dados-para-o-prontuario-verde/): o que é migrado, o que não é, a tabela de sistemas compatíveis e a planilha Excel ou CSV para os demais.
- [Visão geral do modelo de exportação](https://centraldeajuda.prontuarioverde.com.br/exportacao/visao-geral-modelo-de-exportacao/): as tabelas exportadas e o detalhamento das colunas.
- [Licença do Dentalpin](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) e [código-fonte](https://github.com/martinezsalmeron/dentalpin).

Viu algo errado ou desatualizado neste comparativo? [Fale com a gente](https://github.com/martinezsalmeron/dentalpin/discussions) e corrigimos. Vale também se você for da OVYVA.
