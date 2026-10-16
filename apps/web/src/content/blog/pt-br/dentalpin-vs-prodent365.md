---
title: "Dentalpin ou ProDent365: três décadas de história e uma plataforma em transição"
description: "Comparativo com fontes: a HartSystem lançou o Pro365 GO em setembro de 2026 e não publica preço. O Dentalpin é open source e roda no seu servidor."
pubDate: 2026-10-16
tags: [comparacao, prodent365, software-odontologico]
---

A HartSystem é de 1993, fica em Blumenau e vende o ProDent para clínicas odontológicas desde então. Em 18 de setembro de 2026 ela lançou o Pro365 GO, que a própria empresa chama de "a nova geração da plataforma de gestão odontológica da HartSystem", e essa transição é a coisa mais importante a entender antes de assinar.

Nós fazemos o Dentalpin, então não somos neutros. O que podemos ser é exatos.

> **Como ler este comparativo.** Tudo o que se afirma aqui sobre o ProDent365 sai de páginas que a própria HartSystem publica, com link e data no final. Foram dezoito páginas de `hartsystem.com`, incluindo os artigos que a empresa escreve sobre o próprio produto. Nenhum blog agregador, nenhum comparativo de terceiro. E existe uma seção inteira sobre quando o ProDent365 é a escolha melhor, porque existe.

## Em trinta segundos

**O ProDent365** tem o que um produto de 1993 acumula: mais de três décadas de rotina de clínica dentro do software, boleto com baixa automática, comissões por profissional, confirmação de consulta por WhatsApp, interface em português e um telefone com horário publicado. Para uma clínica brasileira que quer ligar e ser atendida, isso não é detalhe.

**O Dentalpin** é open source e gratuito, sem mensalidade por cadeira, por dentista ou por paciente, com o código publicado e o banco de dados no servidor que você escolher. Em troca é de 2026, a interface ainda não está em português e alguém precisa cuidar da máquina.

A pergunta que decide entre os dois não é funcionalidade. É quanto de incerteza você aceita hoje: a HartSystem não publica preço em nenhuma página, e o que o Pro365 GO já faz tem que ser confirmado com um consultor.

![Tela inicial do Dentalpin com as consultas do dia, quem está na clínica, pagamentos vencidos e pacientes recentes](/screenshots/home.png)

*A tela inicial do Dentalpin, com os dados de demonstração que vêm na instalação.*

## O que é o ProDent365

Software de gestão odontológica da HartSystem Sistemas, empresa fundada em 1993 em Blumenau (SC). A página da empresa diz "Fundada em 1993" e "Ao longo de mais de três décadas", o que fecha com os "mais de 32 anos de experiência" da home.

A empresa se apresenta como presente "em mais de 1.000 cidades" e diz que já levou suas soluções "para países como Portugal, Moçambique e Paraguai". Vale registrar uma inconsistência: o contador da página do produto exibe "+900 cidades com clínicas conectadas ao ProDent365" enquanto o texto da mesma página fala de "mais de 1.000 cidades".

São duas páginas da mesma empresa com números diferentes. E os demais contadores do site renderizam como "+ 0" sem JavaScript, então satisfação, confirmações e anos não são legíveis na página.

O catálogo, pela lista que eles publicam por área funcional:

- **Atendimento:** cadastro, agenda, avisos internos para recepção e equipe clínica, gerenciamento de retornos, confirmação de consultas via WhatsApp, integração com Uber e Waze, e o Fast-in, a "anamnese eletrônica preenchida pelo cliente antes da consulta".
- **Gestão financeira:** orçamento, recebimento, "emissão de boletos com baixa automática", gestão de comissões por profissional, controle de pagamentos, inadimplência e indicadores gerenciais.
- **Controle clínico:** anamnese, prontuário digital, odontograma, anotações clínicas, atestado, receita, fichas de especialidades, imagens, documentação e "assinatura eletrônica de documentos integrada".
- **Marketing e comercial:** filtros para campanhas por WhatsApp, e-mail e SMS, controle de indicações, relatórios e CRM integrado para o funil de oportunidades.
- **Pro365IA**, a assistente com inteligência artificial, em duas frentes: a Instrutora, que ajuda a usar o sistema por WhatsApp 24h, e a Consultora, que "analisa os dados da clínica e envia insights automáticos".

O periograma não aparece nessa lista de controle clínico, mas aparece em detalhe num artigo que a própria HartSystem publicou em 18 de agosto de 2026: o Periograma do ProDent registra "profundidade de sondagem, inserção gengival, sangramento, mobilidade dentária, furca, presença de placa, trauma oclusal e classificação de perdas ósseas em tipos 1, 2 e 3", com os dados vinculados a uma data e comparáveis pelas linhas gráficas do recurso. É um periodontograma completo, e a fonte é deles.

A HartSystem chama o ProDent365 de "o primeiro software com inteligência artificial voltado à odontologia no Brasil". Essa é a afirmação deles, não um fato que a gente possa confirmar, e fica aqui como citação.

### O Pro365 GO, e por que ele muda a conversa

Em 23 de setembro de 2026 a empresa publicou o lançamento do Pro365 GO, datado de 18 de setembro de 2026, "a nova geração da plataforma de gestão odontológica da HartSystem", construída "a partir de quase 33 anos" de trajetória com o ProDent.

O FAQ do próprio anúncio responde à pergunta mais direta assim: "O Pro365 GO é apenas a versão web do ProDent? Não." E sobre quem já é cliente: "As condições de acesso, migração ou contratação para clientes atuais devem ser confirmadas diretamente com a HartSystem."

> **A própria empresa diz que a plataforma está sendo reconstruída por partes.** O texto do lançamento é explícito: "Como áreas e funcionalidades estão sendo reconstruídas e incorporadas gradualmente, a confirmação sobre o que já está disponível, o que depende de condição específica e o que permanece no roadmap deve ser feita com um consultor HartSystem." Isso é transparência da parte deles, e é também a razão pela qual nenhuma lista de funcionalidades do Pro365 GO pode ser tratada como disponível hoje.

Entre os pilares anunciados estão "acesso multiplataforma, gestão de diferentes bases, estrutura preparada para integrações por APIs, expansão para diferentes idiomas e países". Estrutura preparada para APIs não é uma API documentada, e nas dezoito páginas consultadas não existe documentação de API nem endpoint público.

## O que é o Dentalpin

Software de gestão odontológica open source. Você baixa o código, instala onde quiser (seu servidor, o provedor de nuvem que preferir) e não paga licença por cadeira, por dentista nem por paciente.

Odontograma, periodontograma com seis sítios por dente, agenda, prontuário, planos de tratamento, orçamentos com assinatura, faturamento, pagamentos, recalls e relatórios. Tudo em uma API REST documentada com OpenAPI, e um assistente de IA que executa tarefas sobre os seus dados respeitando as permissões de cada usuário.

É muito mais novo, e isso aparece. A interface hoje está em inglês e espanhol, não em português. Não existe módulo fiscal brasileiro: o Dentalpin não emite NFS-e e não tem integração bancária brasileira, então boleto com baixa automática é coisa que o ProDent faz e ele não.

![Ficha de paciente no Dentalpin com o odontograma, os alertas clínicos, o plano ativo e a próxima consulta](/screenshots/dental-chart.png)

*Ficha do paciente: odontograma, alertas clínicos, plano ativo e próxima consulta na mesma tela.*

## Cara a cara

Só linhas verificáveis. Onde não existe dado público, está dito.

| | ProDent365 | Dentalpin |
|---|---|---|
| Modelo | Licença comercial | Open source (BSL 1.1 → Apache 2.0 depois de 4 anos) |
| Tempo de mercado | ✓ Fundada em 1993, "mais de três décadas" | ✗ Desde 2026 |
| Base declarada | ✓ "mais de 1.000 cidades" (contador diz "+900") | ✗ Muito poucas clínicas ainda |
| Preço publicado | ✗ Nenhum valor nas 18 páginas consultadas | ✓ R$ 0, tudo incluído |
| Teste grátis | Não citado nas páginas consultadas | ✓ Demo pública, sem instalar |
| Interface em português | ✓ Sim | ✗ Não, hoje inglês e espanhol |
| Suporte por telefone | ✓ (47) 3329-2772, horário publicado | ✗ Telegram e GitHub |
| Boleto com baixa automática | ✓ Sim | ✗ Sem integração bancária brasileira |
| Comissões por profissional | ✓ Módulo próprio | ✗ Não existe |
| NFS-e | Não citada nas páginas consultadas | ✗ Não emite |
| Convênios e TISS | Não citados nas páginas consultadas | ✗ Não existe |
| Confirmação por WhatsApp | ✓ Sim, no produto | ✓ Incluída, você paga Twilio e Meta |
| Odontograma | ✓ Sim | ✓ Sim |
| Periodontograma | ✓ Periograma, sondagem, furca, mobilidade | ✓ Seis sítios por dente |
| Assistente de IA | ✓ Pro365IA, Instrutora e Consultora | ✓ Executa tarefas sobre os seus dados |
| Onde ficam os dados | Não publicado nas páginas consultadas | ✓ Onde você decidir |
| Rodar no seu servidor | Não oferecido nas páginas consultadas | ✓ Sim, é o padrão |
| API documentada | ✗ "estrutura preparada para integrações por APIs" | ✓ REST completa, com OpenAPI |
| Código auditável | ✗ Não | ✓ Publicado no GitHub |
| Contrato de serviço publicado | ✗ Termos cobrem só o site | ✓ Licença e código no repositório |

Sobre preço convém ser preciso, porque aqui não há ruído de blog para desmentir: não há número nenhum.

> **A HartSystem não publica preço em nenhuma das dezoito páginas consultadas.** Não há página de planos, não há faixa, não há "a partir de". Todos os botões levam a um formulário de contato ou a um consultor. Isso não é crítica, é o padrão de quase todo o mercado odontológico brasileiro, mas significa que você só descobre o custo depois de entrar no funil comercial.

Duas ausências merecem o mesmo cuidado, porque no Brasil elas pesam. Nas páginas consultadas não aparece **nota fiscal de serviço, NFS-e, convênio nem TISS**. Isso não quer dizer que o sistema não faça: quer dizer que a empresa não publica, e nós não afirmamos o que não lemos. Se a sua clínica vive de convênio, pergunte isso na primeira ligação.

O mesmo vale para o lado contratual. Os "Termos e Condições" do site são termos de uso de site, não de serviço: começam com "Ao acessar ao site HartSystem Sistemas" e tratam de direitos autorais, links e isenção de responsabilidade sobre os materiais publicados.

Não há SLA, não há disponibilidade, não há prazo de exportação dos seus dados, não há contrato de operador de dados pessoais. A cláusula de lei aplicável diz, literalmente, que os termos são "regidos e interpretados de acordo com as leis da HartSystem Sistemas", o que é um texto de modelo não revisado.

A Política de Privacidade, por sua vez, está datada de 22 de novembro de 2022, se declara sobre "qualquer informação sua que possamos coletar no site", e cita Google AdSense e cookies de afiliados. Ela não fala de prontuário, de dado de paciente, de encarregado nem de hospedagem. Os artigos do blog discutem LGPD e citam a ANPD com competência, mas artigo de blog não é compromisso contratual.

## Escolha o ProDent365 se

E isso vai a sério, não é formalidade:

- **Você quer ligar para um número e ser atendido.** O telefone é publicado, (47) 3329-2772, com horário também publicado: segunda a sexta, das 8h30 às 11h55 e das 13h30 às 17h55. O Dentalpin tem Telegram e GitHub. Se o sistema para numa terça de manhã, a diferença é concreta.
- **Você precisa de boleto com baixa automática e comissão por profissional.** São dois módulos do produto deles e dois buracos no nosso. Para uma clínica com dentistas parceiros e carteira de boleto, isso decide sozinho.
- **Você quer tudo em português, hoje.** Interface, suporte, material e os artigos do blog. A nossa interface ainda não está.
- **Você valoriza software que envelheceu dentro de consultório.** Os depoimentos na página deles são de clientes desde 1995, 1998 e 2002. Mais de três décadas de arestas aparadas resolvem problemas que a gente ainda não sabe que existem.
- **Você não tem ninguém técnico e não quer ter.** O Dentalpin é auto-hospedado. Alguém precisa cuidar do servidor e das cópias de segurança.

## Escolha o Dentalpin se

- **Você quer saber o preço antes de falar com um vendedor.** O nosso está [publicado](/pt-br/precos/) e é zero.
- **Você quer saber onde os dados do seu paciente ficam.** Aqui quem decide é você e o seu servidor, porque a instalação é sua.
- **Você quer poder sair.** O banco de dados é seu e a API é documentada, então exportar não depende de pedir nada a ninguém.
- **Você quer auditar o código** que guarda prontuário. Está publicado no GitHub.
- **Você quer integrar e automatizar** com o site da clínica, com o raio-X, com o que for. É uma API REST com OpenAPI, não um formulário fechado.
- **Você tem ou contrata perfil técnico.** Nesse caso auto-hospedar é uma tarde, não um projeto.

![Periodontograma do Dentalpin com os seis sítios de sondagem por dente](/screenshots/periodontogram.png)

*O periodontograma, com os seis sítios por dente e o registro de sangramento e profundidade.*

## Como seria migrar

O módulo `migration_import` importa através do [dental-bridge](https://github.com/dentaltix/dental-bridge), e de propósito não é um botão único:

1. **Peça a exportação antes de cancelar.** Esse passo zero não depende de nós e é o mais importante: as páginas da HartSystem não publicam procedimento nem prazo de exportação, então peça por escrito, combine o formato e confirme o prazo com a conta ainda ativa.
2. **Suba o arquivo** e o sistema valida tudo antes de escrever qualquer coisa.
3. **Veja o preview**, com contagens e linhas de amostra. Nada foi gravado ainda.
4. **Revise as propostas.** O sistema mapeia o catálogo de procedimentos de origem contra o seu e você decide linha por linha: aceitar, revincular, criar novo ou ignorar. O que pontua acima de 0,9 é aceito em bloco.
5. **Execute**, e a importação roda respeitando as suas decisões.

O passo 4 é onde quase toda migração falha. Duas clínicas nunca codificam os procedimentos do mesmo jeito, e uma equivalência adivinhada em silêncio produz cobrança errada que ninguém percebe até meses depois.

## O que é honesto dizer

Para uma clínica brasileira que quer português, telefone, boleto conciliado e comissão calculada, o ProDent365 entrega hoje coisas que o Dentalpin não entrega. Mais de três décadas de operação e um suporte com horário publicado são vantagens reais, não detalhes de folheto.

O que a gente acha que você deve perguntar a eles, e não a nós: qual produto você está contratando em outubro de 2026, o ProDent365 ou o Pro365 GO, o que já está disponível em cada um, quanto custa e como você sai com os seus dados se quiser sair. As três primeiras perguntas a empresa manda explicitamente para um consultor. A quarta não aparece em nenhuma página.

O Dentalpin é a aposta oposta: o software da clínica não deveria ser uma caixa preta alugada, e preço, código e dados deveriam estar à vista desde antes da primeira ligação. Ele é mais novo e isso aparece. Você pode [testar a demo](https://demo.dentalpin.com) sem instalar nada, [ver os preços](/pt-br/precos/) ou [subir o sistema no seu servidor em três minutos](/pt-br/blog/instalar-dentalpin-em-tres-minutos/) e julgar por conta própria.

## Fontes

Todas consultadas em 16 de outubro de 2026, nas páginas publicadas pela própria HartSystem:

- [HartSystem Sistemas](https://hartsystem.com/): "mais de 32 anos de experiência", "Atendemos clínicas em mais de 1.000 cidades", "+1.000 cidades atendidas", "o primeiro software com inteligência artificial voltado à odontologia no Brasil", "Redução de faltas para apenas 2,7% com confirmação via WhatsApp", "94,5% das consultas confirmadas são efetivamente atendidas", os depoimentos de clientes desde 1995, 1998 e 2002, os contadores que renderizam como "+ 0", o endereço em Blumenau e o telefone (47) 3329-2772.
- [Software Odontológico · ProDent365](https://hartsystem.com/software-odontologico/): a lista de recursos por área funcional (atendimento, gestão financeira, controle clínico, marketing e comercial), o Fast-in, a integração com Uber e Waze, a "emissão de boletos com baixa automática", a "assinatura eletrônica de documentos integrada", a Pro365IA Instrutora e Consultora, o contador "+900 cidades com clínicas conectadas ao ProDent365" contra "presença em mais de 1.000 cidades" no texto da mesma página, e o ProDent365 em Nuvem com "Atualizações automáticas e backups contínuos".
- [Conheça a HartSystem](https://hartsystem.com/conheca-a-hartsystem-sistemas/): "Desde 1993", "Fundada em 1993, em Blumenau (SC)", "Ao longo de mais de três décadas", "Presente em mais de 1.000 cidades" e "já expandimos nossas soluções para países como Portugal, Moçambique e Paraguai".
- [Pro365 GO: nova plataforma de gestão odontológica](https://hartsystem.com/pro365go-plataforma-de-gestao-odontologica/), 23 de setembro de 2026: "O lançamento do Pro365 GO, em 18 de setembro de 2026", "a nova geração da plataforma de gestão odontológica da HartSystem", "a partir de quase 33 anos", "O Pro365 GO é apenas a versão web do ProDent? Não.", "As condições de acesso, migração ou contratação para clientes atuais devem ser confirmadas diretamente com a HartSystem", "Como áreas e funcionalidades estão sendo reconstruídas e incorporadas gradualmente, a confirmação sobre o que já está disponível, o que depende de condição específica e o que permanece no roadmap deve ser feita com um consultor HartSystem", os pilares "acesso multiplataforma, gestão de diferentes bases, estrutura preparada para integrações por APIs, expansão para diferentes idiomas e países", e os sinais de painel citados.
- [Periograma odontológico no ProDent](https://hartsystem.com/periograma-odontologico-prodent/), 18 de agosto de 2026: "profundidade de sondagem, inserção gengival, sangramento, mobilidade dentária, furca, presença de placa, trauma oclusal e classificação de perdas ósseas em tipos 1, 2 e 3", os dados vinculados a uma data e a comparação "por meio das linhas gráficas do recurso".
- [Software odontológico em nuvem seguro](https://hartsystem.com/software-odontologico-em-nuvem-seguro/), 17 de julho de 2026: "acesso de qualquer lugar, atualizações automáticas e backups contínuos", e o tratamento de LGPD e ANPD como orientação editorial.
- [Blog da HartSystem](https://hartsystem.com/blog-hartsystem/): o índice de artigos, usado para localizar o que a empresa publica sobre o próprio produto.
- [Contato](https://hartsystem.com/contato-hartsystem/): "Segunda a Sexta: das 8h30min às 11h55min e das 13h30min às 17h55min".
- [Termos e Condições](https://hartsystem.com/termos-e-condicoes/): o escopo "Ao acessar ao site HartSystem Sistemas", a ausência de SLA, de disponibilidade, de prazo de exportação e de contrato de tratamento de dados, e a cláusula "regidos e interpretados de acordo com as leis da HartSystem Sistemas".
- [Política de Privacidade](https://hartsystem.com/politica-de-privacidade/): "Esta política é efetiva a partir de 22 Novembro de 2022", o escopo "qualquer informação sua que possamos coletar no site", o Google AdSense, os cookies de afiliados e a ausência de qualquer menção a prontuário, dado de paciente, encarregado ou hospedagem.
- Mais oito artigos do blog da própria empresa sobre o produto (permissões de usuários, controle de estoque, indicadores gerenciais, repasse para dentistas, atendimento, ficha endodôntica, anotações clínicas e ficha de DTM), em nenhum dos quais aparece preço, NFS-e, convênio, TISS ou requisito de sistema.
- [Licença do Dentalpin](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) e [código-fonte](https://github.com/martinezsalmeron/dentalpin).

Viu algo errado ou desatualizado neste comparativo? [Fale com a gente](https://github.com/martinezsalmeron/dentalpin/discussions) e corrigimos. Vale também se você for da HartSystem.
