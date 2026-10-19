---
title: "Dentalpin ou Siodonto: plano grátis com limite publicado, contra zero sem limite"
description: "Comparativo com fontes: o Siodonto publica um plano Grátis de R$ 0 para 100 pacientes e 2 usuários, sem cartão. O Dentalpin é open source e roda no seu servidor."
pubDate: 2026-10-19
tags: [comparacao, siodonto, software-odontologico]
---

O Siodonto faz duas coisas raras neste mercado ao mesmo tempo: publica um plano grátis permanente com os limites na tela, e publica uma página dizendo o que ele não garante. As duas coisas valem mais do que parece quando você está escolhendo sistema.

Nós fazemos o Dentalpin, então não somos neutros. O que podemos ser é exatos.

> **Como ler este comparativo.** Tudo o que se afirma aqui sobre o Siodonto sai de páginas que a própria empresa publica em `siodonto.com.br`, com link e data no final: home, sobre, preço, grátis, confiança, grandes clínicas, odontograma, nuvem, termos de uso e política de privacidade. Os dados cadastrais do CNPJ vêm da base pública da Receita Federal. Nenhum blog agregador, nenhum diretório de software. E existe uma seção inteira sobre quando o Siodonto é a escolha melhor, porque existe.

## Em trinta segundos

**O plano grátis do Siodonto é de verdade, e o limite é o modelo de negócio.** São "até 100 pacientes e 2 usuários, sem cartão e sem prazo para expirar", e a própria página diz que dentro desses limites o plano é permanente. Cem pacientes é uma meta que um consultório em funcionamento passa no primeiro ano, e aí a conta vira R$ 49 ou R$ 79 por mês.

**O que o Siodonto tem e nós não temos é o Brasil.** Convênios com guias, lotes, retornos e glosas, NFS-e, Receita Saúde, boletos, PIX, cartões, ponto, estoque e a tela em português. Nenhuma dessas coisas existe no Dentalpin hoje, e para uma clínica que fatura convênio isso encerra a conversa antes de começar.

**A pergunta que decide é de quem é o banco de dados.** No Siodonto os dados ficam em servidores que nenhuma página consultada localiza, e nem os termos nem a política de privacidade descrevem uma exportação. No Dentalpin o banco é seu desde o primeiro dia, e o preço é zero sem limite de pacientes, porque quem paga o servidor é você.

![Tela inicial do Dentalpin com as consultas de hoje, quem está na clínica, os pagamentos em atraso e os pacientes recentes](/screenshots/home.png)

*Tela inicial: consultas do dia, quem está na clínica, pagamentos em atraso e pacientes recentes.*

## O que é o Siodonto

Uma plataforma web de gestão para clínicas e consultórios, que roda no navegador sem instalação. A própria página se apresenta como "uma plataforma de gestão completa para clínicas e consultórios" e, no texto institucional, como "uma plataforma brasileira de gestão para clínicas odontológicas e equipes de saúde".

A oferta pública tem três planos. Grátis a R$ 0, com "até 100 pacientes e 2 usuários, sem cartão e sem prazo para expirar". Avançado a R$ 49/mês. Premium a R$ 79/mês. A página de preço diz que "Todos os planos têm as mesmas funcionalidades" e que "A única diferença está nos limites de pacientes e usuários", e acrescenta que "Você pode mudar de plano quando desejar, sem perder nenhum dado".

O que eles cobrem em módulo é largo para um fornecedor deste tamanho, e vale listar como eles listam:

- **Clínico.** Prontuário eletrônico, odontograma digital e agendamento de consultas.
- **Convênios.** "Tabelas versionadas, elegibilidade, autorizações, guias, lotes, retornos, glosas e recursos", e o ciclo descrito como rastreável até a conciliação financeira.
- **Fiscal.** "NFS-e, Receita Saúde, filas de emissão, conferência, PDF/XML e assinatura A1 compatível".
- **Financeiro.** "Caixas por filial, pagamentos parciais, parcelas, contas, repasses, boletos, PIX e cartões".
- **Estrutura.** "Filiais, profissionais por unidade, usuários individuais, permissões e escopos de acesso por função".
- **Relatórios.** "Agenda, produção, pacientes, serviços, financeiro, fiscal, ponto e estoque por filtros".
- **WhatsApp.** A "API oficial do WhatsApp sem taxa do Siodonto", com a ressalva de que "Eventuais tarifas de mensagens cobradas pela Meta ficam por conta da clínica".

Sobre quem assina o contrato, o rodapé publica a entidade: "59.589.278 DOUGLAS RAFAEL MACHADO BERNARDO - ME", CNPJ 59.589.278/0001-99. A base pública da Receita Federal completa o quadro: situação ativa, porte microempresa, capital social de R$ 10.000, município de Santarém no Pará, optante pelo Simples, e início de atividade em 21 de fevereiro de 2025. Nenhuma página consultada publica ano de fundação, tamanho de equipe ou número de clínicas atendidas.

> **Isso não é um defeito, é um dado que você precisa para ler a palavra "permanente".** Um plano grátis sem prazo para expirar é uma promessa boa, e a duração dela depende de quem a faz continuar existindo. A entidade existe e está ativa no cadastro, o que já separa o Siodonto de fornecedor que não se encontra em registro nenhum. O que o cadastro diz é que a empresa é nova e pequena, e isso é uma pergunta de continuidade, não uma crítica ao produto.

## O que é o Dentalpin

Software de gestão odontológica open source. Você baixa o código, instala onde quiser (seu servidor, o provedor de nuvem que preferir) e não paga licença por clínica, por dentista nem por paciente.

Odontograma, periodontograma com seis sítios por dente, agenda, prontuário, planos de tratamento, orçamentos com assinatura, faturamento, pagamentos, radiografias e relatórios. Há módulos opcionais de lembretes automáticos, multi-clínica, WhatsApp Business e um agente de IA que executa tarefas sobre os seus dados respeitando as permissões de cada usuário. Tudo exposto numa API REST documentada com OpenAPI.

É muito mais novo, e isso aparece. A interface hoje está em inglês e espanhol, não em português. Não existe módulo fiscal brasileiro: o Dentalpin não emite NFS-e, não fala com a Receita Saúde e não fatura convênio em guia. Também não tem controle de ponto, estoque, boleto, PIX nem aplicativo nas lojas, e o portal do paciente está marcado como "em breve", ou seja, hoje não existe.

![Ficha de paciente no Dentalpin com o odontograma, os alertas clínicos, o plano ativo e a próxima consulta](/screenshots/dental-chart.png)

*Ficha do paciente: odontograma, alertas clínicos, plano ativo e próxima consulta na mesma tela.*

## Cara a cara

Só linhas verificáveis. Onde não existe dado público, está dito.

| | Siodonto | Dentalpin |
|---|---|---|
| Modelo | Assinatura em nuvem, com plano grátis | Open source (BSL 1.1 → Apache 2.0 depois de 4 anos) |
| Preço publicado | ✓ Sim, três planos na tela | ✓ R$ 0, tudo incluído |
| Entrada mais barata | ✓ R$ 0, "sem cartão e sem prazo para expirar" | ✓ R$ 0 |
| Limite de pacientes no grátis | ✗ 100 | ✓ Nenhum |
| Limite de usuários no grátis | ✗ 2 | ✓ Nenhum |
| Limites dos planos pagos | ✗ Não publicados em número nas páginas consultadas | ✓ Não existem planos |
| Mudança de plano | ✓ "quando desejar, sem perder nenhum dado" | ✓ Não se aplica |
| Fidelidade e cancelamento | ✗ Não tratados na página de preço | ✓ Não existe contrato |
| Interface em português | ✓ Sim | ✗ Não, hoje inglês e espanhol |
| Suporte em português | ✓ WhatsApp, e-mail e contato | ~ Comunidade no GitHub |
| Treinamento incluído | ✓ "micro curso rápido e gratuito" | ✗ Não publicamos |
| Nada para administrar | ✓ 100% navegador, sem servidor | ✗ Alguém cuida da máquina |
| Prontuário eletrônico | ✓ Sim | ✓ Sim |
| Odontograma | ✓ "Odontograma digital" | ✓ Sim |
| Notação, faces por dente e decíduos | ✗ Não descritos nas páginas consultadas | ✓ Sim |
| Periodontograma | ✗ Não aparece nas páginas consultadas | ✓ Seis sítios por dente |
| Anamnese | ✗ Não aparece nas páginas consultadas | ✓ Histórico clínico |
| Plano de tratamento | ✓ Sim | ✓ Sim |
| Orçamento com assinatura | ✗ Não aparece nas páginas consultadas | ✓ Sim |
| Radiografias e imagem | ~ Anexos sob controle autenticado | ✓ Módulo no core |
| Convênio: guia, lote, retorno e glosa | ✓ Ciclo completo, com tabelas versionadas | ✗ Não existe |
| Padrão TISS | ✗ Não mencionado nas páginas consultadas | ✗ Não existe |
| NFS-e e Receita Saúde | ✓ Com filas, conferência, PDF/XML e A1 | ✗ Não emite |
| Boleto, PIX e cartão | ✓ Sim | ✗ Não publicamos |
| Repasses a profissionais | ✓ Sim | ✓ Comissionamento por profissional |
| Filiais e escopos por função | ✓ Sim | ✓ Módulo multi-clínica |
| Controle de ponto e estoque | ✓ Nos relatórios gerenciais | ✗ Não existe |
| WhatsApp | ✓ API oficial da Meta, "sem taxa do Siodonto" | ~ Módulo WhatsApp Business |
| Portal do paciente | ✗ Não aparece nas páginas consultadas | ✗ Marcado "em breve" |
| Funciona sem internet | ✗ "Não presuma funcionamento offline" | ~ Na sua rede, se o servidor é seu |
| Onde ficam os dados | ✗ Nenhum país, provedor ou data center nomeado | ✓ Onde você decidir |
| Transferência internacional | ~ "podem processar ou armazenar dados fora do Brasil" | ✓ Você escolhe o país |
| Criptografia do banco | ✗ Não atribuída "sem documento oficial específico" | ~ Depende da sua instalação |
| Backup | ~ "backup em nuvem", sem frequência publicada | ~ Sua rotina no seu servidor |
| SLA de disponibilidade | ✗ Não atribuído, pela própria página | ✗ Sem SLA: o servidor é seu |
| Certificação ISO ou SOC 2 | ✗ Não atribuída, pela própria página | ~ A conformidade é da sua instalação |
| Autenticação em dois fatores | ✗ Não mencionada nas páginas consultadas | ✗ Não publicamos |
| Papéis LGPD definidos | ✓ Clínica controladora, Siodonto operador | A clínica é a única controladora |
| Encarregado nomeado | ✗ Só um e-mail de privacidade | A clínica é a única controladora |
| Operadores nomeados | ~ Categorias listadas, só Google/Firebase e Apple nomeados | ✓ Nenhum, os dados não saem de você |
| Exportação dos dados | ✗ Não descrita nos termos nem na política | ✓ O banco é seu, quando quiser |
| Dados após o cancelamento | ✗ Não tratados nos termos | ✓ Continuam na sua máquina |
| Código para auditar | ✗ Não | ✓ Publicado no GitHub |
| API pública documentada | ✗ Não publicada (a API citada é a da Meta) | ✓ REST completa, com OpenAPI |
| Base instalada publicada | ✗ Nenhum número em página nenhuma | ✗ Também não publicamos |
| Teste | ✓ Plano grátis permanente, sem cartão | ✓ Demo pública, sem instalar |

As seis linhas do bloco fiscal e de convênio são as que pesam mais numa clínica brasileira, e são seis linhas que nós perdemos. Vale ler essas antes da linha do preço.

> **O que a página de preço não publica é o limite dos planos pagos.** A frase "A única diferença está nos limites de pacientes e usuários" só serve para escolher se os números existirem, e nas páginas consultadas eles aparecem apenas no plano Grátis, 100 pacientes e 2 usuários. Quantos pacientes cabem no Avançado de R$ 49 e no Premium de R$ 79 é a primeira pergunta a fazer no suporte, por escrito, antes de cadastrar o centésimo paciente.

![Lista de faturas com os estados emitida, paga, parcial, em atraso e rascunho](/screenshots/invoices.png)

*O faturamento do Dentalpin trabalha com séries configuráveis e pagamentos parciais. NFS-e, Receita Saúde e guia de convênio não estão cobertos.*

## As duas coisas que eles dizem de dois jeitos

Aparecem nas páginas deles e não resolvem entre si, então aqui vão as duas versões:

- **"Todos os planos têm as mesmas funcionalidades", contra as listas dos planos.** As duas páginas repetem a frase, e as listas ao lado dela não coincidem: o Chatbot com IA aparece no Premium e não no Grátis, e a integração de WhatsApp aparece no Grátis e não na lista do Avançado. Pergunte pela lista do seu plano, não pela frase.
- **"Backup em nuvem", contra o que o backup promete.** A página da nuvem anuncia o backup e, na mesma frase, manda confirmar "condições, recuperação e responsabilidades com o atendimento". Backup que existe e restauração que foi testada são duas coisas diferentes, e só a segunda salva uma clínica.

## A página que quase ninguém publica

Vale dizer com clareza, porque é incomum: o Siodonto tem uma página de confiança que diz o que ele **não** garante. Ela afirma que não atribui ao produto "certificação externa, homologação, SLA, criptografia integral do banco ou garantia absoluta de disponibilidade sem documento oficial específico e vigente".

Isso é uma concessão que a maioria dos fornecedores deste comparativo não faz. Ao mesmo tempo é a informação mais importante da página, e ela diz que hoje não há SLA, nem certificação, nem criptografia integral do banco afirmada. As duas leituras são verdadeiras e precisam andar juntas.

A mesma página explica o que existe: sessão válida exigida nas áreas operacionais, verificação das ações protegidas no servidor, HTTPS/TLS nos domínios públicos, conteúdo clínico fora do site público e anexos sob controle autenticado. É uma descrição honesta de uma base sólida, sem documento de terceiro por trás.

## Escolha o Siodonto se

E isto não é formalidade, porque em várias situações a escolha é óbvia:

- **Você fatura convênio.** Tabelas versionadas, elegibilidade, autorizações, guias, lotes, retornos, glosas e recursos, com o ciclo rastreável até a conciliação. Nós não temos nada disso, e [faturar convênio](/pt-br/blog/faturar-convenios-odontologicos/) à mão não é alternativa para quem vive dele.
- **Você emite NFS-e ou precisa da Receita Saúde.** Eles publicam filas de emissão, conferência, PDF/XML e assinatura A1 compatível. O Dentalpin não emite [nota fiscal](/pt-br/blog/nota-fiscal-clinica-odontologica/) no Brasil.
- **Você quer começar hoje, de graça, sem cartão e sem servidor.** Até 100 pacientes e 2 usuários, no navegador, com a tela em português e um curso rápido incluído. Para um consultório que está abrindo, isso é difícil de bater.
- **Você não quer administrar máquina nenhuma.** Nossa oferta de R$ 0 pressupõe alguém que cuide do servidor, das atualizações e do backup. A deles não.
- **Você precisa de ponto, estoque, boleto, PIX e cartão num lugar só.** Está na lista deles e não está na nossa.
- **Você tem filiais e quer escopo de acesso por função.** Nós temos módulo multi-clínica, eles têm isso somado ao caixa por filial e ao relatório por unidade.

## Escolha o Dentalpin se

- **Você quer o banco de dados na sua mão.** Prontuário odontológico é documento de guarda longa, e os termos deles não descrevem exportação nem o que acontece com os dados depois do cancelamento. No Dentalpin a [exportação](/pt-br/blog/exportar-dados-do-software/) não é um favor do fornecedor, o banco já é seu.
- **Você precisa saber em que país os dados estão.** Nenhuma página consultada nomeia provedor, região ou data center, e a política diz que alguns fornecedores "podem processar ou armazenar dados fora do Brasil". Se essa resposta tem que ser precisa, ela só é precisa quando o servidor é seu.
- **Você faz periodontia a sério.** Periodontograma com seis sítios por dente, e a palavra periodontograma não aparece em nenhuma página deles.
- **Você vai passar de cem pacientes.** O zero deles tem teto, o nosso não.
- **Você quer integrar com outro sistema.** API REST documentada com OpenAPI, contra uma oferta onde a única API citada é a do WhatsApp da Meta.
- **Você quer auditar o que roda na sua clínica.** O código está publicado, e [a licença](/pt-br/blog/licenca-bsl-explicada/) vira Apache 2.0 quatro anos depois de cada versão.

## Como seria migrar

Sair do Siodonto hoje é a parte que nenhuma página deles descreve, então o roteiro começa antes:

1. **Peça a exportação com a conta ativa, e por escrito.** Nem os termos nem a política de privacidade descrevem formato, prazo ou processo de exportação. Pergunte em que formato os dados saem e quanto tempo leva, antes de cancelar qualquer coisa.
2. **Confira se o odontograma e o histórico vieram junto.** A página do odontograma fala de pacientes, prontuários, odontogramas e históricos preservados na troca de plano, o que não é a mesma coisa que preservados numa exportação para fora.
3. **Peça também o lado financeiro e o de convênio.** Guias, lotes, retornos e glosas são o histórico que vai faltar na primeira auditoria se ficar atrás.
4. **Suba o arquivo** no módulo `migration_import`, que valida tudo antes de escrever qualquer coisa.
5. **Veja o preview**, com contagens e linhas de amostra. Nada foi gravado ainda.
6. **Revise as propostas.** O sistema mapeia o catálogo de procedimentos de origem contra o seu e você decide linha por linha: aceitar, revincular, criar novo ou ignorar. O que pontua acima de 0,9 é aceito em bloco.
7. **Execute**, e a importação roda respeitando as suas decisões.

O passo 6 é onde quase toda migração falha. Duas clínicas nunca codificam os procedimentos do mesmo jeito, e uma equivalência adivinhada em silêncio produz cobrança errada que ninguém percebe até meses depois.

## O que é honesto dizer

Para a maior parte dos consultórios brasileiros pequenos, o Siodonto hoje resolve mais do que o Dentalpin. A tela está em português, o fiscal brasileiro está lá, o convênio está lá, não há servidor para cuidar, e o plano grátis com limite publicado é uma oferta clara num mercado que costuma esconder preço. Se você fatura convênio ou emite NFS-e, não há comparação a fazer: é eles.

O que a gente acha que você deve perguntar a eles, e não a nós: quantos pacientes e usuários cabem no Avançado e no Premium, em que país ficam os servidores e quem é o provedor, com que frequência o backup roda e se a restauração já foi testada, em que formato e em quanto tempo sai uma exportação completa, o que acontece com os dados se a clínica parar de pagar, e qual é a lista exata de funcionalidades do plano que você vai assinar, já que a frase e as listas não combinam.

O Dentalpin é a aposta oposta: o software da clínica não deveria ser uma caixa preta alugada, e preço, código e dados deveriam estar à vista desde antes da primeira conversa. Ele é mais novo e isso aparece, e no fiscal, no convênio e na tela em português eles hoje fazem mais. Você pode [testar a demo](https://demo.dentalpin.com) sem instalar nada, [ver os preços](/pt-br/precos/) ou [subir o sistema no seu servidor em três minutos](/pt-br/blog/instalar-dentalpin-em-tres-minutos/) e julgar por conta própria. Se o que você procura é o que existe de graça no Brasil, o [levantamento dos gratuitos](/pt-br/blog/software-odontologico-gratuito/) compara as ofertas lado a lado.

## Fontes

Páginas do próprio Siodonto, todas consultadas em 19 de outubro de 2026:

- [Siodonto](https://siodonto.com.br/): "uma plataforma de gestão completa para clínicas e consultórios", "Prontuário eletrônico", "Odontograma digital", "Agendamento de consultas", "Filiais, equipe e escopos", "Convênios faturados", "WhatsApp para pacientes", "API oficial do WhatsApp sem taxa do Siodonto", "backup em nuvem", "alinhadas à LGPD", e o rodapé "DOUGLAS RAFAEL MACHADO BERNARDO - ME", CNPJ 59.589.278/0001-99.
- [Sobre](https://siodonto.com.br/sobre.html): "O Siodonto é uma plataforma brasileira de gestão para clínicas odontológicas e equipes de saúde", e "Responsável legal: 59.589.278 DOUGLAS RAFAEL MACHADO BERNARDO - ME". Sem ano de fundação, sem tamanho de equipe e sem número de clientes.
- [Preço](https://siodonto.com.br/software-odontologico/preco.html): Grátis R$ 0 com 100 pacientes e 2 usuários, Avançado R$ 49, Premium R$ 79, "Todos os planos têm as mesmas funcionalidades", "A única diferença está nos limites de pacientes e usuários", "O plano Grátis é permanente, sem cartão, dentro dos limites publicados", "Você pode mudar de plano quando desejar, sem perder nenhum dado", "Integrações exigem configuração; eventuais tarifas de terceiros são separadas da assinatura", "Eventuais tarifas de mensagens cobradas pela Meta ficam por conta da clínica". Sem fidelidade, sem cancelamento e sem menção a impostos sobre os valores.
- [Grátis](https://siodonto.com.br/software-odontologico/gratis.html): "Até 100 pacientes e 2 usuários, sem cartão e sem prazo para expirar", "O plano Grátis do Siodonto custa R$ 0, não exige cartão e não tem prazo para expirar dentro dos limites publicados", "Avançado R$ 49/mês", "Premium R$ 79/mês", "Oferecemos um micro curso rápido e gratuito para ensinar você e seus funcionários a usar o sistema", e o Chatbot com IA listado no Premium.
- [Grandes clínicas](https://siodonto.com.br/grandes-clinicas.html): "Filiais, profissionais por unidade, usuários individuais, permissões e escopos de acesso por função", "Tabelas versionadas, elegibilidade, autorizações, guias, lotes, retornos, glosas e recursos", "Caixas por filial, pagamentos parciais, parcelas, contas, repasses, boletos, PIX e cartões", "NFS-e, Receita Saúde, filas de emissão, conferência, PDF/XML e assinatura A1 compatível", "Agenda, produção, pacientes, serviços, financeiro, fiscal, ponto e estoque por filtros", "Alguns recursos dependem do plano, da profissão, de integrações externas e da configuração da clínica". Sem menção a TISS e sem número de clientes.
- [Confiança](https://siodonto.com.br/confianca.html): "não atribui ao Siodonto certificação externa, homologação, SLA, criptografia integral do banco ou garantia absoluta de disponibilidade sem documento oficial específico e vigente", "áreas operacionais exigem sessão válida e as ações protegidas são verificadas no servidor", "os domínios públicos usam HTTPS/TLS", "conteúdos clínicos não fazem parte do site público", "A clínica normalmente decide quais dados de pacientes serão tratados e atua como controladora".
- [Software odontológico na nuvem](https://siodonto.com.br/software-odontologico-na-nuvem/): "Acesse o Siodonto pelo computador, tablet ou celular com internet", "O Siodonto anuncia backup em nuvem na oferta pública", "Não presuma funcionamento offline: esta oferta é de um sistema web que depende de internet", e a recomendação de confirmar "condições, recuperação e responsabilidades com o atendimento". Nenhum provedor, país ou data center nomeado.
- [Odontograma online](https://siodonto.com.br/odontograma-online/): demo com os dentes 11 a 18, 21 a 28, 31 a 38 e 41 a 48 e as condições "Cárie", "Restauração", "Coroa" e "Ausente", marcada como "Legenda e marcações ilustrativas" que "Não salva dados nem cria registros clínicos", e "Pacientes, prontuários, odontogramas e históricos permanecem na mesma conta durante a troca de plano". Sem notação nomeada, sem faces por dente, sem decíduos e sem periodontograma.
- [Termos de uso](https://siodonto.com.br/software-odontologico/termos.html): "Limites, valores e funcionalidades vigentes são os publicados na página de planos no momento da contratação", "Cancelamentos, cobranças já processadas e eventuais reembolsos observam as condições contratadas e a legislação aplicável", "O Siodonto não se responsabiliza por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais", "Estes Termos de Uso serão regidos e interpretados de acordo com as leis do Brasil". Sem prazo de contrato, sem aviso de cancelamento, sem exportação e sem regra para os dados depois do cancelamento.
- [Política de privacidade](https://siodonto.com.br/politica-privacidade.html): "As clinicas e profissionais que usam o Siodonto normalmente sao os controladores dos dados dos seus pacientes", "o Siodonto atua como operador", "Alguns fornecedores de tecnologia podem processar ou armazenar dados fora do Brasil", retenção "pelo tempo necessario para prestar o servico", portabilidade e eliminação "quando aplicavel", e Google/Firebase e a notificação da Apple como os únicos operadores nomeados. Sem encarregado nomeado e sem provedor de hospedagem nomeado.

Dado cadastral, de fonte oficial:

- [Cadastro Nacional da Pessoa Jurídica, dados públicos da Receita Federal](https://minhareceita.org/59589278000199), consultado em 19 de outubro de 2026: CNPJ 59.589.278/0001-99, razão social "59.589.278 DOUGLAS RAFAEL MACHADO BERNARDO", situação cadastral ATIVA, porte MICRO EMPRESA, capital social R$ 10.000, início de atividade em 21 de fevereiro de 2025, município Santarém (PA), optante pelo Simples.

Sobre o Dentalpin:

- [Licença do Dentalpin](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) e [código-fonte](https://github.com/martinezsalmeron/dentalpin).
