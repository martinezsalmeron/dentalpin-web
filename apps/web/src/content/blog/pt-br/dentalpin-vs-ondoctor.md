---
title: "Dentalpin ou OnDoctor: o preço por usuário e o que fica no Enterprise"
description: "Comparativo com fontes: o OnDoctor publica R$ 79,90 por usuário/mês e deixa TISS e API no Enterprise. O Dentalpin é open source e roda no seu servidor."
pubDate: 2026-10-10
tags: [comparacao, ondoctor, software-odontologico]
---

O OnDoctor publica os preços inteiros na página de planos, o que é raro neste mercado, e publica também a unidade: por usuário/mês. Essa segunda informação decide mais da sua conta do que a lista de recursos, porque ela cresce com a equipe e não com o faturamento.

Nós fazemos o Dentalpin, então não somos neutros. O que podemos ser é exatos.

> **Como ler este comparativo.** Tudo o que se afirma aqui sobre o OnDoctor sai de páginas que a própria empresa publica, com link e data no final: home, Recursos, Especialidades, Preços, Contato, a central de ajuda em `docs.ondoctor.app`, a política de privacidade e o termo LGPD. Nenhum blog agregador e nenhum comparativo de terceiro. E tem uma seção inteira sobre quando eles são a escolha certa, porque no Brasil ela existe e pesa.

## Em trinta segundos

**OnDoctor** é uma plataforma em nuvem para clínicas e consultórios, da OnDoctor Tecnologia Ltda (CNPJ 33.315.587/0001-87). Não é um sistema odontológico: a página de Especialidades anuncia odontologia ao lado de psicologia, pediatria, fisioterapia, nutrição, dermatologia, estética e cardiologia. Publica três planos, tem versão gratuita permanente, emite NFS-e, fatura convênios por TISS e a tela é em português.

**Dentalpin** é open source e roda no navegador, no servidor que você escolher. Não tem mensalidade por cadeira, por dentista ou por paciente, e o código está publicado. Em troca é de 2026, a interface hoje é em inglês e espanhol, e alguém precisa cuidar da máquina.

A pergunta que decide entre os dois não é quanto custa o primeiro mês. É quantas pessoas vão usar o sistema, e se o que a sua clínica mais precisa está no plano de R$ 79,90 ou no de R$ 129,90.

![Tela inicial do Dentalpin com as consultas do dia, quem está na clínica, pagamentos vencidos e pacientes recentes](/screenshots/home.png)

*A tela inicial do Dentalpin, com os dados de demonstração que vêm na instalação.*

## O que é o OnDoctor

Um sistema web, acessado pelo navegador, sem nada para instalar. O rodapé do site resume o posicionamento: "Plataforma 100% em nuvem para otimizar o tempo do médico e modernizar a gestão de clínicas e consultórios". A home traz o selo "100% em nuvem · LGPD · sem instalação" e o rodapé acrescenta "Hospedagem Microsoft Azure · 99,9% de disponibilidade".

A palavra que importa para quem lê isto é "médico". O OnDoctor é multiespecialidade por projeto, não por acaso: a própria central de ajuda documenta um módulo de **Refração**, que é oftalmologia, e a demonstração de agenda na home mostra salas de psicologia e um médico clínico.

Isso não é crítica, é escopo. A página de Especialidades nomeia o que eles entregam para odontologia, em três linhas:

- **"Odontograma e plano de tratamento"**, o que responde à primeira pergunta de qualquer consultório.
- **"Orçamentos e controle de sessões"**, que na central de ajuda aparece como página própria ("Controle de Tratamento e Sessões").
- **"Assinatura de termos pelo paciente"**, dentro do módulo de assinatura eletrônica.

Fora disso, o catálogo é o de um sistema de gestão completo: agenda com Call Center e mapa de recursos, prontuário eletrônico com anexos e galeria, anamnese digital enviada ao celular do paciente, teleconsulta com gravação, financeiro com contas a pagar e receber, conciliação bancária, estoque, CRM, BI e multiunidade com gestão de franquias.

Sobre tamanho, a frase publicada é esta e vale citá-la como está: "Mais de 20.000 profissionais confiam no OnDoctor". São profissionais, não clínicas, e os contadores animados ao lado dela não renderizam número algum sem JavaScript, então ficam de fora daqui.

Tempo de mercado eles não anunciam em lugar nenhum, mas publicam algo melhor: a central de ajuda lista notas de versão mês a mês, e a mais antiga é a de **23 de março de 2020**. Um histórico público de mais de cinco anos de lançamentos é verificável de um jeito que "anos de experiência" nunca é.

## O que é o Dentalpin

Software de gestão odontológica open source. Você baixa o código, instala onde quiser e não paga licença por cadeira, por dentista ou por paciente. A licença é BSL 1.1 e vira Apache 2.0 depois de quatro anos.

Odontograma, periodontograma completo com os seis sítios por dente, agenda, prontuário eletrônico, planos de tratamento, orçamentos com assinatura, faturamento, pagamentos, lembretes de consulta e relatórios. Uma API REST documentada com OpenAPI, e um agente de IA que executa tarefas sobre os seus dados reais respeitando as permissões de quem pergunta.

O que **não** existe aqui merece ficar neste parágrafo e não no rodapé: não há faturamento TISS, não há emissão de NFS-e, não há teleconsulta, não há módulo de convênios, e a interface hoje é em inglês e espanhol. Controle de estoque existe, mas como módulo de comunidade, não oficial.

![Periodontograma do Dentalpin com os seis sítios de sondagem registrados em cada dente](/screenshots/periodontogram.png)

*O periodontograma com profundidade de sondagem e sangramento nos seis sítios de cada dente.*

## O que os três planos cobram, e por quê isso muda a conta

Esta é a parte que vale ler antes de cadastrar o primeiro paciente, e ela está publicada inteira, o que conta a favor deles.

1. **FREE, R$ 0.** O FAQ é explícito: "Sim, e não expira". Inclui "Até 100 cadastros de pacientes", convênios ilimitados e a Agenda Simples. Passando de 100, "seus dados continuam lá", e para cadastrar novos pacientes é preciso migrar para o Premium.
2. **Premium, R$ 79,90 por usuário/mês.** É aqui que entram pacientes ilimitados, prontuário completo, financeiro completo, teleconsulta, assinatura digital, estoque, NFS-e, DRE e os lembretes por WhatsApp.
3. **Enterprise, R$ 129,90 por usuário/mês.** Descrito como "Para redes de clínicas, franquias e operações com múltiplas unidades", e o FAQ acrescenta "a partir de R$ 129,90 por usuário/mês, com proposta sob medida para redes maiores".

> **Duas coisas que uma clínica odontológica brasileira costuma precisar estão no Enterprise, não no Premium.** São o **Faturamento TISS** e a **Integração via API**, ao lado do Assistente de IA, do CRM, da conciliação bancária e da Agenda Call-Center. Se você fatura convênio, o plano relevante para você é o de R$ 129,90 por usuário/mês, não o de R$ 79,90.

E há uma terceira camada, também publicada, em letra pequena ao pé da tabela: "Recurso com possível custo adicional ou limite conforme o uso (ex.: lembretes no WhatsApp, NFS-e)". Os asteriscos estão nos lembretes por WhatsApp, na emissão de NFS-e, na gestão de franqueados e no white label.

Nenhum valor é anunciado para esses extras nas páginas consultadas. Então a conta de uma clínica com recepção, duas dentistas e uma auxiliar faturando convênio começa em quatro usuários no Enterprise, e termina em um número que só o comercial deles fecha.

Em troca, o que eles prometem é curto e claro: "7 dias grátis nos planos pagos", "Sem cartão de crédito", "Cancele quando quiser" e "Migração de dados". Nenhuma página consultada menciona prazo mínimo de contrato, e isso é mérito deles num mercado onde dois anos de fidelidade é comum.

## Cara a cara

Só linhas verificáveis. Onde não existe dado público, dizemos isso.

| | OnDoctor | Dentalpin |
|---|---|---|
| Modelo | SaaS multiespecialidade | Open source (BSL 1.1 → Apache 2.0 depois de 4 anos) |
| Preço publicado | ✓ Sim: R$ 0, R$ 79,90 e R$ 129,90 | ✓ Gratuito, tudo incluído |
| Unidade de cobrança | ~ Por usuário/mês nos planos pagos | ✓ Não há licença por usuário |
| Plano gratuito | ~ Sim, limitado a 100 cadastros de pacientes | ✓ Sem limite de pacientes |
| Instalação e manutenção | ✓ Nada para instalar nem manter | ✗ Servidor e atualizações por sua conta |
| Interface em português | ✓ Sim | ✗ Não, hoje inglês e espanhol |
| Foco odontológico | ~ Uma de oito especialidades anunciadas | ✓ Só odontologia |
| Odontograma | ✓ Sim, anunciado em Especialidades | ✓ Sim |
| Periodontograma | ~ Não localizado nas páginas consultadas | ✓ Completo, seis sítios por dente |
| Faturamento TISS | ✓ Sim, no plano Enterprise | ✗ Sem módulo |
| Emissão de NFS-e | ✓ Sim, com "possível custo adicional" | ✗ Sem módulo fiscal brasileiro |
| Convênios | ✓ Ilimitados, já no plano FREE | ✗ Sem módulo de convênios |
| Teleconsulta | ✓ Sim, a partir do Premium | ✗ Não existe |
| Assistente de IA | ~ Só no plano Enterprise | ✓ Incluído |
| API | ~ Rotas publicadas na central de ajuda; a integração é item do Enterprise | ✓ REST completa, com OpenAPI |
| Onde ficam os dados | ~ Azure, "servidores localizados no Brasil e Estados Unidos" | ✓ Onde você decidir |
| Rodar no seu servidor | ✗ Não | ✓ Sim, é o padrão |
| Exportar os seus dados | ~ Sob solicitação, em até 60 dias após o fim da licença | ✓ API completa e acesso direto ao banco |
| Código auditável | ✗ Não | ✓ Publicado no GitHub |
| Prazo mínimo de contrato | ✓ "Cancele quando quiser" | ✓ Não há contrato |
| Histórico público de versões | ✓ Notas de lançamento desde março de 2020 | ✗ Desde 2026 |
| Base declarada | ✓ "Mais de 20.000 profissionais" | ✗ Muito poucas clínicas ainda |

Três linhas dessa tabela são ausências nas páginas consultadas, e não afirmações deles, então merecem a explicação inteira.

Em 10 de outubro de 2026 percorremos a home, Recursos, Especialidades, Preços e o índice completo da central de ajuda e não encontramos **periodontograma** nomeado em nenhuma delas. Se o seu consultório faz periodontia e precisa registrar profundidade de sondagem e sangramento nos seis sítios de cada dente, essa é a pergunta a fazer a eles antes de assinar, e não uma acusação nossa.

Sobre o **odontograma**, a central de ajuda tem página própria, e o conteúdo dela é um vídeo. Nada no texto diz qual notação usa, se há dentição decídua ou se o registro é por face. Existe, é anunciado, e os detalhes se resolvem na demonstração.

Sobre **API**, a situação é melhor do que o normal neste mercado e vale crédito: a central de ajuda publica as rotas, com verbos e caminhos, para procedimentos, convênios, profissionais, clientes, agenda e prontuários, incluindo escrita (`POST /clientes`, `POST /agendas`, `POST /prontuarios`). O que a página de preços diz é que "Integração via API" é item do Enterprise. A documentação não menciona autenticação, limites de requisição nem restrição de plano, então a pergunta a fazer por escrito é em qual plano a chave é liberada.

## Escolha o OnDoctor se

E isso vale a sério, não é formalidade:

- **Você fatura convênios.** O Faturamento TISS está lá, com configuração, guia de uso e importação da tabela TUSS documentados, e não existe no Dentalpin. Para uma clínica que vive de convênio, essa linha encerra a comparação antes das outras.
- **Você precisa emitir nota fiscal de serviço.** A NFS-e sai do próprio sistema, com possível custo por uso. O Dentalpin não emite, e [isso tem consequências práticas na rotina fiscal](/pt-br/blog/nota-fiscal-clinica-odontologica/).
- **Você quer começar hoje, sem servidor e sem ninguém técnico.** Cadastra, entra e usa. O plano FREE não expira e serve para testar com pacientes reais até os primeiros cem. Não há máquina, atualização nem backup para você configurar.
- **A sua equipe é pequena.** Por usuário/mês é caro quando a clínica cresce e é barato quando são duas pessoas. Com uma dentista e uma recepcionista no Premium, são R$ 159,80 por mês com tudo instalado e mantido por eles.
- **Você quer a tela em português.** A nossa é em inglês e espanhol. Treinar recepção em idioma estrangeiro é um custo real que nenhuma licença compensa.
- **Você atende por teleconsulta.** Está no prontuário, com vídeo e gravação, desde o Premium. Nós não temos.
- **Você tem várias unidades ou franquias.** Multi-empresa, gestão de franqueados, Agenda Call Center numa tela só e BI estão desenhados para isso, e gerente de conta dedicado vem no Enterprise.
- **Você quer um fornecedor com cinco anos de lançamentos publicados.** Somos de 2026, e em software que guarda prontuário isso é um argumento legítimo contra nós.

## Escolha o Dentalpin se

- **A sua conta cresce com a equipe e isso não fecha.** Contratar uma auxiliar não deveria aumentar a mensalidade do software. Aqui não há licença por usuário, por cadeira ou por paciente, e [os preços estão publicados](/pt-br/precos/).
- **Você quer saber em que máquina está o prontuário dos seus pacientes.** Quem escolhe o servidor é você, e a resposta cabe num endereço. Do outro lado, a política de privacidade deles diz que os dados ficam em "servidores localizados no Brasil e Estados Unidos".
- **Você quer poder tirar os seus dados na hora, inteiros e sem pedir.** Existe API e existe acesso direto ao banco. Lá, a exportação completa é uma solicitação do administrador da conta, prevista para até 60 dias depois do fim da licença.
- **Você faz periodontia a sério** e quer o periodontograma completo no mesmo lugar que o resto do prontuário.
- **Você quer integrar e automatizar sem depender do plano.** A nossa API é a mesma em qualquer instalação, porque não há plano.
- **Você quer um sistema que só faz odontologia.** O OnDoctor atende oito especialidades anunciadas e documenta até refração. Flexibilidade tem o preço de não ser especialista em nenhuma delas.
- **Você quer poder auditar o código** que guarda prontuário. Está publicado no GitHub, e é auditável por alguém que você contrate, não só por nós.

![Plano de tratamento do Dentalpin com as etapas e os procedimentos de cada sessão](/screenshots/treatment-plan.png)

*O plano de tratamento dividido em etapas, com os procedimentos de cada sessão.*

## Como seria a migração

Saindo do OnDoctor, o passo zero não depende de nós: peça a exportação **com a licença ativa**. A política de privacidade deles prevê que o administrador da conta pode solicitar "a exportação de todos os dados inseridos em sua conta na plataforma ONDOCTOR" em até 60 dias após o término da licença, e acrescenta que dados de prontuário só saem com autorização desse administrador. Começar por aí, e não pelo cancelamento, evita descobrir formatos e prazos com a clínica no meio da troca.

Depois, do lado do Dentalpin, o módulo `migration_import` importa através do [dental-bridge](https://github.com/dentaltix/dental-bridge):

1. **Suba o arquivo** e o sistema valida antes de mexer em qualquer coisa.
2. **Veja a prévia** com contagens e linhas de exemplo. Nada foi gravado ainda.
3. **Revise as propostas**: o sistema compara o catálogo de procedimentos de origem com o seu e você decide linha a linha (aceitar, religar, criar novo ou ignorar). O que pontua acima de 0,9 é aceito em bloco.
4. **Execute**, e a importação roda respeitando as suas decisões.

> **O passo 3 é onde quase toda migração falha.** Duas clínicas nunca codificam procedimento do mesmo jeito, e uma equivalência adivinhada em silêncio produz orçamento errado e repasse errado que ninguém detecta até meses depois.

## O que é honesto dizer

Para uma clínica que [fatura convênio por TISS](/pt-br/blog/faturar-convenios-odontologicos/) e emite nota fiscal todo mês, o OnDoctor entrega hoje duas coisas que o Dentalpin não entrega, em português, sem servidor e com preço publicado. Essa clínica deveria escolher eles, e o resto desta página não muda isso.

A comparação fica interessante no outro caso: consultório que atende particular, equipe que vai crescer, e vontade de não pagar por cabeça nem perguntar a um fornecedor onde está o prontuário. Aí a conta por usuário/mês vira o argumento central, e ela não é nossa, é deles, publicada.

Você pode [testar a demo](https://demo.dentalpin.com) sem instalar nada, [ver os preços](/pt-br/precos/) ou [subir o sistema no seu servidor em três minutos](/pt-br/blog/instalar-dentalpin-em-tres-minutos/) e julgar por conta própria.

## Fontes

Todas consultadas em 10 de outubro de 2026:

- [OnDoctor](https://www.ondoctor.app/): "Plataforma 100% em nuvem para otimizar o tempo do médico e modernizar a gestão de clínicas e consultórios", o selo "100% em nuvem · LGPD · sem instalação", "Hospedagem Microsoft Azure · 99,9% de disponibilidade", a lista de recursos da home, "Mais de 20.000 profissionais confiam no OnDoctor", a demonstração de agenda com salas de psicologia e médico clínico, e a razão social OnDoctor Tecnologia Ltda com o CNPJ 33.315.587/0001-87.
- [Recursos](https://www.ondoctor.app/recursos): o catálogo de módulos de agenda, prontuário, financeiro e gestão, e o preço "a partir de R$ 79,90/mês".
- [Especialidades](https://www.ondoctor.app/especialidades): as oito especialidades anunciadas e as três linhas de odontologia, "Odontograma e plano de tratamento", "Orçamentos e controle de sessões" e "Assinatura de termos pelo paciente".
- [Preços](https://www.ondoctor.app/precos): FREE a R$ 0 com "Até 100 cadastros de pacientes", Premium a R$ 79,90 por usuário/mês, Enterprise a R$ 129,90 por usuário/mês, a composição de cada plano, a nota "Recurso com possível custo adicional ou limite conforme o uso (ex.: lembretes no WhatsApp, NFS-e)", e o FAQ com "Sim, e não expira", "O valor é por usuário/mês", "São 7 dias gratuitos, sem cadastro de cartão de crédito", "Cancele quando quiser" e "a partir de R$ 129,90 por usuário/mês, com proposta sob medida para redes maiores".
- [Contato](https://www.ondoctor.app/contato): "WhatsApp comercial (61) 4042-0123", "Atendimento rápido, seg. a sex.", "Resposta em até 1 dia útil" e "Ajuda na migração dos seus dados".
- [Central de ajuda](https://docs.ondoctor.app/): o índice completo de páginas, as notas de versão a partir de 23 de março de 2020, a página [Odontograma](https://docs.ondoctor.app/universidade-ondoctor/guia-de-uso-geral/atendimento/prontuario-eletronico/odontograma.md) (apenas vídeo), [Controle de Tratamento e Sessões](https://docs.ondoctor.app/universidade-ondoctor/guia-de-uso-geral/atendimento/prontuario-eletronico/controle-de-tratamento-e-sessoes.md), o módulo de Refração, as páginas de [Faturamento TISS](https://docs.ondoctor.app/universidade-ondoctor/guia-de-uso-geral/faturamento-tiss.md) com configuração, guia de uso e importação da tabela TUSS, e as [rotas de API](https://docs.ondoctor.app/universidade-ondoctor/guia-de-uso-geral/configuracoes/dados-da-empresa/integracoes-rotas-api.md) com os endpoints de cadastros, agenda e prontuário. Nenhuma página do índice trata de periodontograma.
- [Política de Privacidade](https://docs.ondoctor.app/termos/termos-de-privacidade.md): o item 2.1 com os dados "armazenados em nuvem (cloud computing) da Microsoft Azure com servidores localizados no Brasil e Estados Unidos", o 2.1.1 sobre transferência internacional, o 2.3.1 com a exportação de "todos os dados inseridos em sua conta na plataforma ONDOCTOR" em até 60 dias após o fim da licença, o 3.4 com a autorização do administrador para exportar prontuários e o 6.2 sobre backup.
- [Termo LGPD](https://docs.ondoctor.app/termos/termo-lgpd.md): "ONDOCTOR, doravante denominada CONTROLADORA" e a retenção "durante todo o período de prestação dos serviços".
- [Licença do Dentalpin](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) e [código-fonte](https://github.com/martinezsalmeron/dentalpin).

Viu algo errado ou desatualizado neste comparativo? [Fale com a gente](https://github.com/martinezsalmeron/dentalpin/discussions) e corrigimos. Vale também se você for do OnDoctor.
