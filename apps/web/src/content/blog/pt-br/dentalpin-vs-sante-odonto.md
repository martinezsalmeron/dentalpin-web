---
title: "Dentalpin ou Santé Odonto: preço publicado, fidelidade de 12 meses e o que só vem no Premium"
description: "Comparativo com fontes: a Santé Odonto publica R$ 1.410,24 por ano no Starter, com fidelidade de 12 meses e NFS-e apenas no Premium. O Dentalpin é open source."
pubDate: 2026-10-13
tags: [comparacao, sante-odonto, software-odontologico]
---

A Santé Odonto faz uma coisa que quase nenhum software odontológico brasileiro faz: publica a tabela inteira, com os dois planos, o valor do ano e o que cada um libera. Isso resolve metade da decisão e deixa a outra metade exposta, que é quanto tempo você fica preso ao contrato e o que acontece com os seus dados quando quiser sair.

Nós fazemos o Dentalpin, então não somos neutros. O que podemos ser é exatos.

> **Como ler este comparativo.** Tudo o que se afirma aqui sobre a Santé sai de páginas que a própria empresa publica, com link e data no final. Nenhum blog agregador, nenhum comparativo de terceiro. E tem uma seção inteira sobre quando a Santé Odonto é a escolha certa, porque em muitos casos ela é.

## Em trinta segundos

**Santé Odonto** é um sistema em nuvem feito em Cascavel (PR), com preço publicado, teste de 7 dias sem cartão, aplicativo para iOS e Android e um agente de IA que atende pelo WhatsApp. A empresa declara mais de 12.000 profissionais de saúde na plataforma, e esse número é da empresa inteira, não do produto odontológico.

**Dentalpin** é open source e gratuito, sem mensalidade por cadeira, por dentista ou por paciente, com o código publicado e os dados no servidor que você escolher. Em troca, é de 2026, alguém precisa cuidar da máquina e ele não emite nota fiscal brasileira.

A pergunta que decide entre os dois não é o preço do primeiro ano. É se você aceita uma fidelidade de 12 meses sem reembolso num sistema cuja política não descreve como exportar os seus dados.

![Tela inicial do Dentalpin com as consultas do dia, quem está na clínica, pagamentos vencidos e pacientes recentes](/screenshots/home.png)

*A tela inicial do Dentalpin, com os dados de demonstração que vêm na instalação.*

## O que é a Santé Odonto

Software de gestão odontológica em nuvem, acessado pelo navegador e por aplicativo. A página do produto diz que é "100% online" e lista "Mais de 60 funcionalidades".

A primeira coisa a entender é que a Santé não é uma empresa de um produto só. Ela vende três: **Santé Odonto** para clínicas e consultórios odontológicos, **Santé Clinic** para as demais áreas da saúde (medicina, fisioterapia, psicologia, nutrição, podologia, oftalmologia, fonoaudiologia) e **Santé Conversas**, um agente de atendimento por WhatsApp e Instagram com IA, cobrado à parte "a partir de R$ 437/mês". O comparativo aqui é com o Santé Odonto.

O que o produto entrega, pelas páginas deles:

- **Odontograma interativo** ligado ao prontuário e ao financeiro: "Clique no dente, registre procedimentos, visualize o plano de tratamento completo".
- **Agenda inteligente** com "Arrastar e soltar, bloqueios, multi-profissional, retornos e encaixes automáticos".
- **Financeiro completo**, descrito como "Contas a pagar/receber, fluxo de caixa, DRE, comissões e NFS-e".
- **Prontuário com fotos** por atendimento, galeria de antes e depois e anexos ilimitados.
- **Módulo de harmonização orofacial**, com diagrama facial, galeria e documentos automáticos.
- **Integração com o iDoc da Radio Memory**, citada na lista do plano de entrada.

**Quem é a empresa.** O rodapé traz duas pessoas jurídicas, Santé Sistemas Ltda. (CNPJ 27.819.855/0001-03) e Santé Clinic Ltda. (CNPJ 55.490.209/0001-72). A página *Sobre nós* diz "Fundada em 2018 em Cascavel (PR)", e os dados estruturados da mesma página registram `foundingDate: 2018`, embora a biografia do fundador logo acima diga que "Thiago fundou a Santé em 2016". Ela declara "+12000 Profissionais da saúde", "20M+ Agendamentos realizados", "R$2bi+ Transacionados na plataforma" e o prêmio "Top 10 Startups Paraná 2024", e afirma atender "no Brasil, Portugal, Paraguai e Argentina".

Vale guardar uma ressalva sobre esse número: os 12.000 são profissionais de saúde na plataforma inteira, não dentistas no Santé Odonto. A própria página apresenta a cifra no nível da empresa.

## O que é o Dentalpin

Software de gestão odontológica open source, sob licença BSL 1.1, que vira Apache 2.0 depois de quatro anos. Você baixa o código, instala onde quiser e não paga licença por cadeira, por dentista ou por paciente.

Odontograma, periodontograma completo com os seis sítios por dente, agenda, prontuário eletrônico, planos de tratamento, orçamentos com assinatura, faturamento, pagamentos, lembretes de consulta e relatórios. Uma API REST documentada com OpenAPI, e um agente de IA que executa tarefas sobre os seus dados reais respeitando as permissões de quem pergunta.

É muito mais novo, e ele não emite NFS-e. No Brasil isso pesa, e voltamos ao assunto.

![Ficha do paciente no Dentalpin com o odontograma, os alertas clínicos, o plano ativo e a próxima consulta](/screenshots/dental-chart.png)

*Ficha do paciente: odontograma, alertas clínicos, plano ativo e próxima consulta na mesma tela.*

## O preço está publicado, e é a tabela que decide

A página de planos mostra três formas de pagar (Mensal, Anual parcelado com 8% de desconto e Anual à vista com 20%) e abre no anual à vista. São esses os valores que a página renderiza:

| Plano | Agendas | De | Por ano | Equivalente ao mês |
|---|---|---|---|---|
| Starter | 1 incluída, R$ 33/mês por adicional | R$ 1.762,80 | R$ 1.410,24 | R$ 117,52 |
| Premium | Ilimitadas | R$ 5.115,60 | R$ 4.092,48 | R$ 341,04 |

Os dois cartões trazem a mesma linha embaixo: "Pagamento único • Pix ou Cartão • Fidelidade 12 meses". Os valores do plano mensal carregam por JavaScript e não aparecem no HTML servido, então não os reproduzimos aqui.

O que o Starter já inclui é generoso e precisa ser dito: "Profissionais e usuários ilimitados", gestão financeira completa, prontuário com odontograma, controle de retornos, orçamentos parciais e totais, prescrições digitais, módulo de harmonização orofacial, aplicativo de agenda e suporte por WhatsApp. Num mercado que cobra por usuário, profissionais ilimitados no plano de entrada é um diferencial real.

A linha divisória está em outro lugar. Pela lista da própria página, **ficam de fora do Starter**: notas fiscais (NFS-e), módulo de comissões, CRM de vendas, assinatura eletrônica ilimitada, transcrição de áudios com IA no prontuário, personalização do sistema, campanhas de marketing por WhatsApp e, o que mais aparece no dia a dia, a **confirmação automática e os lembretes de agendamento por WhatsApp**. No Starter as confirmações são manuais, pelo WhatsApp Web.

> **O item que mais muda a conta é a agenda.** O Starter vem com uma. Um consultório com três dentistas atendendo ao mesmo tempo precisa de três agendas, o que soma R$ 66/mês às duas adicionais, ou leva direto ao Premium. Se você também emite nota fiscal pelo sistema, a decisão já estava tomada: NFS-e é Premium.

![Agenda do Dentalpin na visão semanal, com as consultas de cada profissional lado a lado](/screenshots/schedule-week.png)

*A agenda do Dentalpin na visão semanal. O número de agendas abertas ao mesmo tempo não é um item de tabela de preços aqui.*

## A fidelidade, que é a parte que ninguém lê

Os termos de uso são explícitos, e esta é a frase inteira: "O USUÁRIO declara estar ciente de que, ao contratar o plano anual, assume o compromisso contratual de fidelidade mínima de 12 (doze) meses".

Três detalhes do mesmo documento completam o quadro:

- **No plano anual, depois dos 7 dias de arrependimento**, o cancelamento "não dará direito a reembolso, estorno ou devolução parcial ou total de valores pagos".
- **No plano mensal** o cancelamento é a qualquer momento e sem multa, com acesso até o fim do ciclo pago, mas "não há reembolso proporcional do período restante".
- **O cancelamento só vale dentro da plataforma.** O texto diz que solicitações "por outros meios, como e-mail, telefone ou WhatsApp, não serão processadas".

Nada disso é incomum num SaaS brasileiro, e o desconto de 20% existe justamente por causa da fidelidade. O ponto é que o teste gratuito dura 7 dias e o compromisso dura 12 meses, então a avaliação séria precisa caber nessa primeira semana.

## Onde ficam os dados

A política de privacidade identifica o controlador como "Grupo Santé Sistemas LTDA", CNPJ 27.819.855/0001-03, e cita a LGPD (Lei nº 13.709/2018).

Ela nomeia a AWS para a plataforma e a Vercel para o site institucional, mas **não diz em que país ou região os dados ficam**. A seção 12.6 reconhece que parte dos fornecedores "estão sediados fora do Brasil, principalmente nos Estados Unidos", e diz que as transferências internacionais observam a Resolução nº 19/2024 da ANPD. A lista de operadores inclui AWS, Vercel, Google, Meta, Discord, RD Station e N8N.

Sobre guarda, a seção 5.4 é específica: dados cadastrais por no mínimo 10 anos após o cancelamento, prontuários por no mínimo 20 anos citando a Resolução CFM 1.821/2007, e documentos fiscais por 5 anos.

> **A portabilidade está listada como direito, mas não como procedimento.** As seções 12.3 e 18.3 citam a portabilidade entre os direitos do titular, e nenhuma página consultada diz como pedir a exportação, em que formato ela sai nem em quanto tempo. Se você for assinar o anual, peça isso por escrito antes, não depois.

## Cara a cara

Só linhas verificáveis. Onde não há dado público, está dito.

| | Santé Odonto | Dentalpin |
|---|---|---|
| Modelo | Assinatura mensal ou anual | Open source (BSL 1.1 → Apache 2.0 depois de 4 anos) |
| Implantação | 100% nuvem, navegador e app iOS/Android | Seu servidor, seu provedor, ou local |
| Preço publicado | ✓ R$ 1.410,24 e R$ 4.092,48 por ano | ✓ R$ 0, tudo incluído |
| Fidelidade | ✗ 12 meses no plano anual | ✓ Nenhuma |
| Teste antes de pagar | ✓ 7 dias, sem cartão | ✓ Demo pública, sem cadastro |
| Agendas | ~ 1 no Starter, R$ 33/mês cada adicional | ✓ Sem limite |
| Profissionais e usuários | ✓ Ilimitados nos dois planos | ✓ Ilimitados |
| NFS-e | ✓ Sim, no Premium | ✗ Não emite |
| Lembrete de consulta | ✓ Automático no Premium, manual no Starter | ✓ Envio pelo sistema |
| Periodontograma | Não citado nas páginas consultadas | ✓ Seis sítios por dente |
| Onde ficam os dados | AWS, região não publicada | ✓ Onde você decidir |
| Código auditável | ✗ Não | ✓ Publicado no GitHub |
| API documentada | ✗ Não nas páginas consultadas | ✓ REST completa, OpenAPI |
| Anos no mercado | ✓ Desde 2018 | ✗ Desde 2026 |
| Profissionais na plataforma | ✓ +12.000 declarados | ✗ Muito poucos ainda |
| Suporte | ✓ WhatsApp em horário comercial | ✗ Telegram e GitHub |

## Escolha a Santé Odonto se

E isto é sério, não é formalidade:

- **Você precisa emitir NFS-e pelo sistema.** O Dentalpin não emite. Para um consultório que fatura todo mês, isso sozinho encerra a comparação, e o Premium resolve em três cliques pela descrição deles.
- **Você quer começar na segunda-feira, sem servidor e sem informático.** São 7 dias de teste sem cartão e a implantação é deles. O Dentalpin é autoinstalado e alguém precisa cuidar da máquina e dos backups.
- **A confirmação automática por WhatsApp é o que segura a sua agenda.** É o recurso que mais devolve faltas em consultório brasileiro, e eles entregam pelo número oficial da clínica.
- **Você tem muitos profissionais e poucas agendas.** Profissionais e usuários ilimitados já no Starter é melhor do que a média do mercado, que cobra por cabeça.
- **Você faz harmonização orofacial.** Existe um módulo dedicado, com diagrama facial e galeria de antes e depois, e isso não é comum.
- **Você quer um telefone, ou melhor, um WhatsApp para chamar.** Suporte humanizado em horário comercial é infraestrutura que nós não temos.

Uma empresa com oito anos de operação e 12.000 profissionais resolve problemas que nós ainda nem sabemos que existem.

## Escolha o Dentalpin se

- **Você não quer assinar 12 meses sem saber como tirar os seus dados.** Aqui o banco de dados é seu, no servidor que você escolheu, e a API é documentada.
- **O número de agendas não deveria ser um item de tabela.** Abrir mais um consultório não muda a conta.
- **Você quer poder auditar o código** que guarda prontuário de paciente. Ele está publicado no GitHub.
- **Você tem ou contrata perfil técnico.** Com isso, subir o sistema é uma tarde, não um problema.
- **Você quer integrar e automatizar** com o resto das suas ferramentas, por API e não por formulário fechado.
- **Você prefere resolver a nota fiscal no contador ou num emissor à parte** e não quer pagar o plano inteiro por causa dela.

## Como seria a migração

O módulo `migration_import` importa através do [dental-bridge](https://github.com/dentaltix/dental-bridge), e não é um botão único de propósito:

1. **Suba o arquivo** e o sistema valida antes de mexer em qualquer coisa.
2. **Veja a prévia** com contagens e linhas de exemplo. Nada foi gravado ainda.
3. **Revise as propostas**: o sistema compara o catálogo de tratamentos de origem com o seu e você decide linha a linha (aceitar, religar, criar novo ou ignorar). O que pontua acima de 0,9 é aceito em bloco.
4. **Execute**, e a importação roda respeitando as suas decisões.

Saindo da Santé, o passo zero não depende de nós e precisa ser feito com a conta ativa: peça a portabilidade por escrito, com as imagens, e combine o formato antes de cancelar. Lembre também que o cancelamento só é processado dentro da plataforma.

O passo 3 é onde quase toda migração falha. Duas clínicas nunca codificam os tratamentos do mesmo jeito, e uma equivalência adivinhada em silêncio produz nota emitida errada que ninguém percebe até meses depois.

## O que é honesto dizer

Para um consultório brasileiro que emite nota fiscal pelo sistema, quer confirmação automática no WhatsApp e não tem ninguém para cuidar de servidor, a Santé Odonto entrega hoje coisas que o Dentalpin não entrega, e publica quanto custa, o que boa parte do mercado ainda não faz. Dizer o contrário seria vender um problema para você.

O Dentalpin é a aposta oposta: o software da clínica não deveria ser uma caixa preta alugada por 12 meses, e os seus dados deveriam sair quando você quiser porque existe uma API e um servidor seu. Ele é mais novo e isso aparece. Você pode [testar a demo](https://demo.dentalpin.com) sem instalar nada, [ver os preços](/pt-br/precos/) ou [subir o sistema no seu servidor em três minutos](/pt-br/blog/instalar-dentalpin-em-tres-minutos/) e julgar por conta própria.

## Fontes

Todas consultadas em 13 de outubro de 2026:

- [Santé Sistemas](https://www.santesistemas.io/): os três produtos, as funcionalidades da plataforma, o teste de 7 dias sem cartão e as cifras declaradas.
- [Santé Odonto](https://www.santesistemas.io/sante-odonto): "100% online", "Mais de 60 funcionalidades", odontograma interativo, agenda, financeiro com DRE, comissões e NFS-e, prontuário com fotos e o módulo de harmonização orofacial.
- [Planos e preços do Santé Odonto](https://www.santesistemas.io/planos/sante-odonto): Starter e Premium, R$ 1.762,80 e R$ 1.410,24, R$ 5.115,60 e R$ 4.092,48, os equivalentes mensais, "R$ 33/mês por agenda adicional", "Fidelidade 12 meses", a lista completa de cada plano e as perguntas frequentes.
- [Planos](https://www.santesistemas.io/planos): "A partir de R$ 437/mês" do Santé Conversas.
- [Sobre nós](https://www.santesistemas.io/sobre-nos): "Fundada em 2018 em Cascavel (PR)", a biografia que cita 2016, os cofundadores, "+12000 Profissionais da saúde", "20M+", "R$2bi+", "Top 10 Startups Paraná 2024" e os países atendidos.
- [Termos de uso](https://www.santesistemas.io/termos-de-uso-da-plataforma-sante): a fidelidade mínima de 12 meses, a ausência de reembolso no anual após 7 dias, o cancelamento sem multa no mensal sem reembolso proporcional e o cancelamento apenas pela plataforma.
- [Política de privacidade](https://www.santesistemas.io/politica-de-privacidade): o controlador e o CNPJ, a LGPD, a AWS e a Vercel, a seção 12.6 sobre fornecedores sediados fora do Brasil e a Resolução ANPD nº 19/2024, a lista de operadores, a portabilidade nas seções 12.3 e 18.3 e os prazos de guarda da seção 5.4.
- [Licença do Dentalpin](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) e [código-fonte](https://github.com/martinezsalmeron/dentalpin).

Viu algo errado ou desatualizado neste comparativo? [Fale com a gente](https://github.com/martinezsalmeron/dentalpin/discussions) e corrigimos. Vale também se você for da Santé.
