---
title: "Dentalpin ou Dentalis: banking integrado contra código aberto"
description: "Comparativo com fontes: a Dentalis tem conta digital e boleto dentro do sistema e não publica preço. O Dentalpin é open source e roda no seu servidor."
pubDate: 2026-10-12
tags: [comparacao, dentalis, software-odontologico]
---

A Dentalis não vende só gestão odontológica. Ela vende um sistema com um banco dentro: conta digital gratuita, boleto com conciliação automática e crédito para o seu paciente, tudo na mesma tela do prontuário. Essa é a diferença que decide entre os dois sistemas, e ela não é nossa, é deles.

Nós fazemos o Dentalpin, então não somos neutros. O que podemos ser é exatos.

> **Como ler este comparativo.** Tudo o que se afirma aqui sobre a Dentalis sai de páginas que a própria empresa publica, com link e data no final: home, Quem Somos, as três páginas de produto, Contato, Termos de Uso, a política de privacidade e o sitemap. A única fonte externa é o site da MV, o grupo que a própria Dentalis diz integrar. Nenhum blog agregador e nenhum comparativo de terceiro. E tem uma seção inteira sobre quando eles são a escolha certa, porque neste caso ela é longa.

## Em trinta segundos

**Dentalis** é um sistema odontológico em nuvem com meios de pagamento embutidos, vendido em três produtos por porte de clínica. A página Quem Somos declara "34 anos de experiência" e "mais de 18.000 usuários em todo o Brasil", e diz que a empresa integra o Ecossistema MV. A tela é em português, emite nota fiscal e tem aplicativo para o seu celular e para o paciente.

**Dentalpin** é open source e roda no navegador, no servidor que você escolher. Não tem mensalidade por cadeira, por dentista ou por paciente, e o código está publicado. Em troca é de 2026, a interface hoje é em inglês e espanhol, e alguém precisa cuidar da máquina.

A pergunta que decide entre os dois não é qual tem mais recursos. É se você quer que o sistema que guarda o prontuário seja também o sistema que processa o seu dinheiro.

![Tela inicial do Dentalpin com as consultas do dia, quem está na clínica, pagamentos vencidos e pacientes recentes](/screenshots/home.png)

*A tela inicial do Dentalpin, com os dados de demonstração que vêm na instalação.*

## O que é a Dentalis

Um sistema em nuvem, acessado pelo navegador, com aplicativo no celular. A home resume assim: "Com o Dentalis nas nuvens você tem toda a segurança e mobilidade para acessar o que quiser a qualquer hora, em qualquer lugar e por qualquer dispositivo."

São três produtos, divididos por porte, e a divisão fica clara no título de cada página:

- **DentalSmart**, "Gestão acessível para dentistas", para quem trabalha sozinho. Traz cadastro de pacientes, plano de tratamento, assinatura digital, módulo financeiro de ortodontia e integração de pagamentos.
- **DentalFlex**, "Gestão descomplicada para consultórios". Acrescenta odontograma gráfico, agenda online, painel de gestão, harmonização orofacial, o aplicativo Dentalis Mobile e um aplicativo para o paciente agendar e assinar documentos.
- **DentalMax**, para redes. Consolida faturamento de todas as unidades em um login, acompanha royalties de franquia, controla estoque e traz ranking de vendas e ticket médio por unidade.

O que eles chamam de "Recursos que só a Dentalis oferece" é a parte financeira, e vale citar como está: "Conta digital gratuita para fazer pagamentos e emitir boletos direto em nosso software." No DentalFlex isso aparece como banking integrado, com "boletos com conciliação automática" e crédito ao paciente, e a página do DentalSmart nomeia os parceiros: "integrado à maquineta Stone para cartão de crédito e meios de pagamentos digitais FitBank".

Sobre tempo de mercado, a página Quem Somos diz "34 anos de experiência" e "Desde os anos 90". O código da mesma página carrega uma linha do tempo que começa em 1990, com "Lançamento da 1ª versão do programa Dentalis", passa por "Lançamento da versão 100% online e na nuvem" em 2014 e pela "Wallet Digital Dentalis Conta (Bank as a Service)" em 2020. Essa linha do tempo não aparece na tela: os elementos estão no documento com `visibility: hidden`, então quem visita a página não a vê.

Sobre tamanho, a frase publicada é "atendendo mais de 18.000 usuários em todo o Brasil", e a página do DentalFlex escreve o mesmo número como "mais de 18.000 clientes". São usuários em um lugar e clientes no outro, e a diferença entre as duas palavras é grande em um mercado onde cada clínica tem várias pessoas usando o sistema. A home tem uma seção com o título "Dentalis em números" que renderiza sem número algum, então ela fica de fora daqui.

A ligação com o grupo é a única coisa que não precisa ficar só na palavra deles. A própria MV publica a Dentalis na página do Ecossistema MV, entre "as 13 empresas do Ecossistema liderado pela MV", e a descreve como "Empresa focada na gestão completa para o segmento odontológico, no modelo SAAS, para clínicas, escolas e consultórios".

> **A Dentalis não publica preço em nenhum lugar do site.** O sitemap do site lista treze páginas no total e nenhuma delas é de preços, planos ou mensalidade. Nenhum valor em reais aparece em nenhuma delas. Se o número importa para você, o caminho é pedir a eles.

## O que é o Dentalpin

Software de gestão odontológica open source. Você baixa o código, instala onde quiser (seu servidor, o provedor de nuvem que preferir) e não paga licença por cadeira, por dentista ou por paciente.

Odontograma, periodontograma completo, agenda, prontuário eletrônico, planos de tratamento, orçamentos com assinatura, cobranças, lembretes e relatórios. Tem API REST com OpenAPI e um assistente de IA que executa tarefas sobre os seus dados reais, respeitando as permissões de cada usuário.

É muito mais novo, e isso importa. Voltamos a esse ponto.

![Prontuário do paciente no Dentalpin com o odontograma, os alertas clínicos, o plano ativo e a próxima consulta](/screenshots/dental-chart.png)

*Prontuário do paciente: odontograma, alertas clínicos, plano ativo e próxima consulta na mesma tela.*

## Frente a frente

Só linhas verificáveis. Onde não existe dado publicado, está dito assim.

| | Dentalis | Dentalpin |
|---|---|---|
| Modelo | SaaS proprietário, do Ecossistema MV | Open source (BSL 1.1 → Apache 2.0 depois de 4 anos) |
| Preço publicado | ✗ Nenhum valor em nenhuma das 13 páginas | ✓ R$ 0, tudo incluído |
| Produtos | Três por porte: Smart, Flex e Max | Um só, sem versões |
| Tempo de mercado | ✓ "34 anos de experiência" | ✗ Desde 2026 |
| Base declarada | ✓ "mais de 18.000 usuários" | ✗ Muito poucas clínicas ainda |
| Grupo por trás | ✓ Uma das 13 empresas do Ecossistema MV | ✗ Projeto independente |
| Interface em português | ✓ Sim | ✗ Não, hoje inglês e espanhol |
| Conta digital e boleto no sistema | ✓ Conta digital gratuita, boleto com conciliação | ✗ Não existe |
| Crédito para o paciente | ✓ Sim, nos três produtos | ✗ Não existe |
| Emissão de nota fiscal | ✓ Sim | ✗ Sem módulo fiscal brasileiro |
| Aplicativo para o paciente | ✓ Agenda e assina documentos | ✗ Não existe |
| Harmonização orofacial | ✓ Módulo próprio, com simulação na foto | ✗ Não existe |
| Rede e franquia | ✓ Royalties e consolidação por unidade | ~ Várias clínicas na mesma instalação, sem royalties |
| Odontograma | ✓ Sim, gráfico, com imagens e anamnese | ✓ Sim |
| Periodontograma | ~ Não citado nas páginas consultadas | ✓ Completo, seis sítios por dente |
| Instalação e manutenção | ✓ Nada para instalar nem manter | ✗ Servidor e atualizações por sua conta |
| Rodar no seu servidor | ✗ Não | ✓ Sim, é o padrão |
| Onde ficam os dados | ~ "nos servidores do Dentalis", sem país nomeado | ✓ Onde você decidir |
| API para integrar | ✗ Sem documentação nas páginas consultadas | ✓ REST completa, com OpenAPI |
| Código auditável | ✗ Não | ✓ Publicado no GitHub |
| Termos de uso | ✗ Página publicada e sem conteúdo | ✓ Licença e código no repositório |

Quatro linhas dessa tabela são ausências nas páginas consultadas, e não afirmações deles, então merecem a explicação inteira.

Em 12 de outubro de 2026 percorremos as treze páginas do sitemap e **periodontograma** não aparece em nenhuma delas, nem como parodontograma. O odontograma existe, é anunciado e é descrito com detalhe ("Odontograma completo com funções sinalizadoras, imagens, anamnese"). Se o seu consultório faz periodontia e precisa registrar profundidade de sondagem e sangramento nos seis sítios de cada dente, essa é a pergunta a fazer a eles antes de assinar, e não uma acusação nossa.

Sobre **API**, a única ocorrência da palavra em todo o site está na política de privacidade, falando de cookies e web beacons para coleta de dados de navegação. Não existe documentação de integração publicada. Isso não quer dizer que não exista API: quer dizer que você não consegue avaliar isso antes de falar com o comercial.

Sobre **onde ficam os dados**, a política de privacidade diz que "as informações dos Usuários permanecerão armazenadas nos servidores do Dentalis" e que "temos servidores com firewall e criptografia de padrão internacional". Nenhuma página consultada nomeia país, provedor de nuvem ou data center. Para uma clínica que precisa responder isso num termo de consentimento, a frase não resolve.

Sobre os **Termos de Uso**, a página existe no sitemap, abre com o título "Termos de Uso" e não tem mais nada. Prazo de contrato, fidelidade, condições de cancelamento e requisitos de sistema não aparecem em lugar nenhum do site, então não há como comparar nenhum deles. Vale o mesmo para a identificação da empresa: nem a home, nem Quem Somos, nem Contato, nem a política de privacidade trazem razão social ou CNPJ. O que o site publica é o endereço em São Paulo, um telefone e "© 2026 Dentalis Software".

**A política de privacidade tem duas cláusulas que vale ler antes de assinar.** Uma autoriza a Dentalis a "armazenar, processar usar, transmitir ou disponibilizar a terceiros informações obtidas durante o uso da plataforma". A outra permite "a utilização de todas as informações coletadas para o estabelecimento de uma base de dados de propriedade intelectual do Dentalis".

São cláusulas comuns no mercado e estão publicadas, que é mais do que muitos fazem. Ainda assim, quem decide o que acontece com os dados da sua clínica deveria ler as duas.

Em compensação, a mesma política é melhor que a média em três pontos concretos, e isso é crédito deles: publica prazos de retenção em número ("Dados de cadastro e autenticação: mantidos enquanto a conta estiver ativa e por até 1 ano após encerramento", "Logs de acesso e auditoria: retidos por 1 ano"), publica o prazo de resposta a pedidos LGPD ("15 dias úteis") e garante portabilidade: "receber seus dados em formato estruturado e transferi-los para outro serviço".

## Escolha a Dentalis se

E isso vale a sério, não é formalidade:

- **Você quer boleto, cartão e crédito ao paciente dentro do sistema.** Conta digital gratuita, conciliação automática e integração com Stone e FitBank. O Dentalpin não faz nada disso e não vai fazer: não somos uma instituição de pagamento. Para uma clínica que vive de parcelamento, essa linha encerra o comparativo antes das outras.
- **Você precisa emitir nota fiscal de serviço.** Sai do próprio sistema. O Dentalpin não emite, e [isso tem consequências práticas na rotina fiscal](/pt-br/blog/nota-fiscal-clinica-odontologica/).
- **Você quer a tela em português.** A nossa é em inglês e espanhol. Treinar recepção em idioma estrangeiro é um custo real que nenhuma licença compensa.
- **Você tem uma rede ou uma franquia.** Consolidação de faturamento de todas as unidades em um login, acompanhamento de royalties, ranking de vendas e ticket médio por unidade. É um produto desenhado para isso, e o nosso não é.
- **Você faz harmonização orofacial.** Existe módulo próprio, com análise facial e simulação sobre a foto do paciente. Nós não temos nada equivalente.
- **Você quer um fornecedor grande atrás do software.** Trinta e quatro anos declarados, 18.000 usuários declarados e uma das treze empresas de um grupo de software hospitalar. Somos de 2026 e independentes, e em software que guarda prontuário isso é um argumento legítimo contra nós.
- **Você quer começar hoje, sem servidor e sem ninguém técnico.** Não há máquina, atualização nem cópia de segurança para você configurar.
- **O seu paciente deve poder agendar e assinar pelo celular.** Existe aplicativo para isso, e existe também o Dentalis Mobile para a sua equipe. Nós não publicamos aplicativo nenhum: o Dentalpin se usa pelo navegador.

Um produto com trinta e quatro anos de rodagem em consultórios brasileiros resolve problemas que nós ainda não sabemos que existem.

![Lista de faturas do Dentalpin com os estados emitida, paga, pagamento parcial, vencida e rascunho](/screenshots/invoices.png)

*A lista de faturas, com a situação de cobrança de cada uma e o que ficou pendente.*

## Escolha o Dentalpin se

- **Você quer saber quanto custa antes de falar com alguém.** [Os preços estão publicados](/pt-br/precos/) e o núcleo é R$ 0 para sempre. Do outro lado, nenhuma das treze páginas do site traz um valor.
- **Você quer saber em que máquina está o prontuário dos seus pacientes.** Quem escolhe o servidor é você, e a resposta cabe num endereço.
- **Você quer poder tirar os seus dados na hora, inteiros e sem pedir.** Existe API e existe acesso direto ao banco PostgreSQL, que é uma cópia padrão que você mesmo restaura onde quiser.
- **Você faz periodontia a sério** e quer o periodontograma completo no mesmo lugar que o resto do prontuário.
- **Você quer integrar e automatizar.** A API REST é documentada com OpenAPI e é a mesma em qualquer instalação, porque não há plano nem versão.
- **Você quer separar o software do dinheiro.** Banking integrado é conveniência, e também é uma segunda amarra: trocar de sistema passa a significar trocar de meio de pagamento no mesmo mês.
- **Você quer poder auditar o código** que guarda prontuário. Está publicado no GitHub, e é auditável por alguém que você contrate, não só por nós.
- **Você quer ler o contrato antes de assinar.** A licença e o código estão no repositório. A página de Termos de Uso deles está publicada e vazia.

## Como seria a migração

Saindo da Dentalis, o passo zero não depende de nós: peça a exportação **com a conta ativa**, por escrito. A política de privacidade deles prevê o direito de "receber seus dados em formato estruturado e transferi-los para outro serviço" e dá 15 dias úteis para responder a esse pedido, mas também diz que dados de cadastro ficam retidos por até um ano após o encerramento e que "Registros de pacientes podem estar sujeitos a retenção conforme legislação odontológica". Começar por aí, e não pelo cancelamento, evita descobrir formatos e prazos com a clínica no meio da troca.

Depois, do lado do Dentalpin, o módulo `migration_import` importa através do [dental-bridge](https://github.com/dentaltix/dental-bridge):

1. **Suba o arquivo** e o sistema valida antes de mexer em qualquer coisa.
2. **Veja a prévia** com contagens e linhas de exemplo. Nada foi gravado ainda.
3. **Revise as propostas**: o sistema compara o catálogo de procedimentos de origem com o seu e você decide linha a linha (aceitar, religar, criar novo ou ignorar). O que pontua acima de 0,9 é aceito em bloco.
4. **Execute**, e a importação roda respeitando as suas decisões.

> **O passo 3 é onde quase toda migração falha.** Duas clínicas nunca codificam procedimento do mesmo jeito, e uma equivalência adivinhada em silêncio produz orçamento errado e repasse errado que ninguém detecta até meses depois.

Um aviso específico deste caso: se você usa a conta digital da Dentalis para receber, a migração do sistema e a migração do recebimento são dois projetos, não um. Resolva o segundo antes de mexer no primeiro.

## O que é honesto dizer

Para uma clínica brasileira que parcela tratamento, emite nota fiscal todo mês e quer tudo numa tela em português, a Dentalis entrega hoje três coisas que o Dentalpin não entrega e não pretende entregar. Essa clínica deveria escolher eles, e o resto desta página não muda isso.

O comparativo fica interessante no outro caso: consultório que atende particular, recebe por Pix ou por máquina que já tem, e quer saber quanto custa o software e onde fica o prontuário sem precisar de uma reunião para descobrir. Aí as treze páginas sem preço e a página de termos em branco passam a pesar, e esses dois fatos não são nossos, são do site deles.

Você pode [testar a demonstração](https://demo.dentalpin.com) sem instalar nada, [ver os preços](/pt-br/precos/) ou [subir o sistema no seu servidor em três minutos](/pt-br/blog/instalar-dentalpin-em-tres-minutos/) e julgar por conta própria.

## Fontes

Todas consultadas em 12 de outubro de 2026. O site serve uma página de verificação de navegador a requisições simples, então as páginas abaixo foram lidas renderizadas em um navegador real:

- [Dentalis](https://www.dentalis.com.br/): o título "Software Odontológico Completo para Sua Clínica", "Com o Dentalis nas nuvens você tem toda a segurança e mobilidade para acessar o que quiser a qualquer hora, em qualquer lugar e por qualquer dispositivo", "Prontuário Eletrônico" com "Odontograma completo com funções sinalizadoras, imagens, anamnese", "Recursos que só a Dentalis oferece" com "Conta digital gratuita para fazer pagamentos e emitir boletos direto em nosso software", a agenda integrada com confirmação por WhatsApp, a seção "Dentalis em números" que renderiza sem figura alguma, os três produtos no rodapé e o endereço "Av. Queiroz Filho, 1700, sala 307, torre D – Vila Leopoldina, SP".
- [Quem Somos](https://www.dentalis.com.br/quem-somos/): "34 anos de experiência", "atendendo mais de 18.000 usuários em todo o Brasil", "Integrando o Ecossistema MV", "Desde os anos 90", a missão sobre "clínicas, redes e escolas de odontologia", Sergio Aronis como CEO, e a linha do tempo de 1990, 2012, 2014, 2020 e 2022 presente no documento com `visibility: hidden`.
- [DentalSmart](https://www.dentalis.com.br/solucoes/dentalsmart/): "Gestão acessível para dentistas", banking integrado, módulo financeiro de ortodontia, assinatura digital, plano de tratamento, bot de WhatsApp, emissão de notas fiscais, controle de pedidos ao laboratório, e "O software da Dentalis já é integrado à maquineta Stone para cartão de crédito e meios de pagamentos digitais FitBank".
- [DentalFlex](https://www.dentalis.com.br/solucoes/dentalflex/): "Gestão descomplicada para consultórios", "Software 100% online e muito fácil de usar", "boletos com conciliação automática", crédito para pacientes, odontograma gráfico, harmonização orofacial com simulação sobre a foto, agenda online, Dentalis Mobile, o aplicativo do paciente para agendar e assinar documentos, "Conta Digital gratuita para você e todos os seus dentistas" e "Junte-se a mais de 18.000 clientes".
- [DentalMax](https://www.dentalis.com.br/solucoes/dentalmax/): "Plataforma totalmente online e intuitiva", gestão consolidada de faturamento por unidade num login, ranking de vendas e ticket médio, acompanhamento de royalties para franquia, gestão de estoque e comissionamento configurável.
- [Política de Privacidade](https://www.dentalis.com.br/politica-de-privacidade/): "as informações dos Usuários permanecerão armazenadas nos servidores do Dentalis", "temos servidores com firewall e criptografia de padrão internacional", a autorização para "armazenar, processar usar, transmitir ou disponibilizar a terceiros informações obtidas durante o uso da plataforma", "o estabelecimento de uma base de dados de propriedade intelectual do Dentalis", os prazos "mantidos enquanto a conta estiver ativa e por até 1 ano após encerramento" e "Logs de acesso e auditoria: retidos por 1 ano", o prazo de "15 dias úteis (LGPD)", o direito "receber seus dados em formato estruturado e transferi-los para outro serviço" e a nota de que "Registros de pacientes podem estar sujeitos a retenção conforme legislação odontológica".
- [Termos de Uso](https://www.dentalis.com.br/termos-de-uso/): página publicada com o título e sem conteúdo.
- [Contato](https://www.dentalis.com.br/contato/): endereço, telefone "+55 11 3168-9274" e e-mail, sem CNPJ.
- [Sitemap de páginas](https://www.dentalis.com.br/page-sitemap.xml): as treze páginas do site, nenhuma delas de preços ou planos. A página `/solucoes/dentaluni/`, que a home linka, não está no sitemap e responde "A página não pode ser encontrada".
- [Ecossistema MV](https://mv.com.br/ecossistema): "as 13 empresas do Ecossistema liderado pela MV" e a ficha da Dentalis, "Empresa focada na gestão completa para o segmento odontológico, no modelo SAAS, para clínicas, escolas e consultórios", com link para `www.dentalis.com.br`.
- [Licença do Dentalpin](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) e [código-fonte](https://github.com/martinezsalmeron/dentalpin).

Viu algo errado ou desatualizado neste comparativo? [Fale com a gente](https://github.com/martinezsalmeron/dentalpin/discussions) e corrigimos. Vale também se você for da Dentalis.
