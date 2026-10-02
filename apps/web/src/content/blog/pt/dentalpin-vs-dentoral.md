---
title: "Dentalpin ou Dentoral: certificação da AT, IA clínica e open source"
description: "Comparação entre o Dentoral, 34 anos de produto e certificado n.º 906 da AT, e o Dentalpin, open source e gratuito mas sem SAF-T. Com fontes e datas."
pubDate: 2026-10-02
tags: [comparacao, dentoral, software-gestao-dentaria]
---

Se tem uma clínica dentária em Portugal e precisa que o software de gestão também fature, a comparação acaba depressa: o Dentoral está no registo público de programas certificados pela Autoridade Tributária e o Dentalpin não está. Vale a pena ler o resto para saber o que ganha em troca, mas é essa a linha que decide.

Nós fazemos o Dentalpin, por isso não somos neutros. O que podemos ser é exatos.

> **Como ler esta comparação.** Tudo o que aqui se afirma sobre o Dentoral sai de páginas publicadas pela Duas Ribeiras, com link e data no fim. A certificação não foi confirmada no site deles, foi confirmada na consulta pública do Portal das Finanças. Nenhum blog agregador e nenhum número de memória.

## Em trinta segundos

**O Dentoral é o produto rodado e certificado.** Nasceu em 1992, está em "centenas de clínicas" por declaração da própria empresa, liga-se automaticamente a 22 sistemas de radiografia nomeados e fatura com SAF-T dentro do sistema. Tem ainda uma camada de IA construída pela própria equipa: a DR·IA lê radiografias com notação FDI e pontuação PAI.

**O Dentalpin é open source e gratuito** na versão autoalojada: sem licença por posto, por dentista ou por paciente, com o código publicado, uma API REST documentada e os dados no servidor que a clínica escolher. Em troca, é de 2026, não emite SAF-T e não tem faturação certificada.

A pergunta não é qual é melhor. É se quer que seja o software de gestão a emitir as faturas da clínica. Se quiser, hoje a resposta é o Dentoral.

![Ecrã de início do Dentalpin com as consultas de hoje, quem está na clínica, pagamentos vencidos e pacientes recentes](/screenshots/home.png)

*O ecrã de início do Dentalpin, com os dados de demonstração que vêm com a instalação.*

## O que é o Dentoral

Software de gestão para clínicas de medicina dentária, desenvolvido pela Duas Ribeiras em Caria, Belmonte. A cronologia está publicada na página deles e é invulgar nesta área: "O Dentoral nasceu em 1992; a Duas Ribeiras, Lda. foi constituída em 1998 para o desenvolver e apoiar a tempo inteiro".

Não é estritamente dentário, e é melhor dizê-lo do que descobri-lo depois. A empresa descreve-se como fazendo software "para clínicas de medicina dentária e policlínicas", e qualquer clínica "pode criar os seus próprios formulários de registo clínico por especialidade, Clínica Geral, Fisioterapia, entre outras". No registo da AT o programa certificado chama-se, literalmente, "DENTORAL - Software de Gestão para Clínicas Médicas".

A versão atual é a 7, e os módulos publicados são estes:

- **Agenda** com confirmações por SMS, recalls automáticos e inquéritos de satisfação com estatística das respostas.
- **Odontograma digital** com acesso direto a "Anamnese, Tratamentos, Periodontia, Observações, Exames e Ortodontia" a partir do mesmo ecrã.
- **Folhas de obra** para próteses e implantes, do orçamento ao laboratório.
- **Faturação e SAF-T**, gerados "em conformidade com a lei portuguesa, direto da ficha do paciente".
- **DRHello**, receção automática em quiosque, com cinco métodos de identificação do paciente: QR code enviado por email, Cartão de Cidadão, número de contribuinte, número de beneficiário ou número de telemóvel.
- **Tablets** para assinatura de consentimento RGPD, anamnese, plano de tratamentos e consentimento informado para radiologia, com o texto legal em português, espanhol, inglês e francês.
- **DRAnalítica**, o painel de gestão, com faturação e atendimentos filtráveis por clínica, médico, ano e mês e comparação com os dois anos anteriores.
- **DRChat**, mensagens internas com grupos de difusão e envio de SMS para operadores.

A integração com imagem é o ponto mais forte da lista e não tem equivalente do nosso lado. A página nomeia 22 sistemas de radiografia aos quais o Dentoral se liga automaticamente, entre eles Sidexis, Romexis, VixWin, Digora, CliniView, MyRay, Florida Probe e DTX Studio.

### A DR·IA, que é a parte interessante

A DR·IA é a camada de inteligência artificial, construída pela própria equipa. A RadIA "lê radiografias periapicais, panorâmicas e bitewings e assinala os achados directamente sobre a imagem", com notação FDI e pontuação PAI, e sugere uma abordagem terapêutica para o médico validar.

Sobre o odontograma, a DR·IA "cruza sondagens periodontais, mobilidades dentárias, lesões de furca e todo o histórico de tratamentos" para responder a perguntas do médico. Há também uma pontuação de risco de falta de 0 a 100 por marcação e leituras automáticas do painel financeiro.

A própria apresentação põe o travão onde deve: "as análises e sugestões apresentadas pela DR·IA são um apoio à decisão clínica e nunca substituem o julgamento profissional". É a nota que um fornecedor sério escreve e vale registá-la.

> **Uma coisa a perguntar-lhes, não a assumir.** A página promete que "nenhum dado que identifique o paciente sai da clínica", e explica como: radiografias sem identificação, médicos identificados por código e DPIA feita segundo o modelo do EDPB. Ao mesmo tempo diz que "os fornecedores de IA usados operam sob política de retenção zero de dados", o que significa que as imagens saem mesmo, pseudonimizadas, para um terceiro. Não é uma contradição, é uma arquitetura. Peça por escrito quem é esse fornecedor e onde processa, porque isso vai para o seu registo de subcontratantes.

## O que é o Dentalpin

Software de gestão dentária open source. Descarrega o código, instala-o onde quiser e não paga licença por posto de trabalho, por dentista ou por paciente.

O núcleo inclui agenda, ficha de pacientes, odontograma, periodontograma, histórico clínico, planos de tratamento por fases, orçamentos, faturação, imagem clínica e relatórios. Por cima há uma API REST documentada com OpenAPI, lembretes automáticos e um agente de IA que executa tarefas sobre os dados reais respeitando as permissões de quem pergunta.

O que hoje **não** existe, e é exatamente a lista onde o Dentoral é forte: faturação certificada pela AT, ficheiro SAF-T, integrações com sistemas de radiografia, leitura de radiografias por IA, leitura do Cartão de Cidadão e receção em quiosque. O único módulo fiscal que existe é o Verifactu, e é espanhol.

Na versão autoalojada o custo é o servidor e as cópias de segurança, cobrados pela Hetzner diretamente à clínica, 12-15 € e 4 € por mês à tarifa europeia. O plano gerido ainda não tem tarifa publicada para Portugal.

![Ficha de paciente no Dentalpin com o odontograma, os alertas clínicos, o plano ativo e a próxima consulta](/screenshots/dental-chart.png)

*Ficha de paciente: odontograma, alertas clínicos, plano ativo e próxima consulta no mesmo ecrã.*

## Cara a cara

Só linhas verificáveis. Onde não há dado público, está escrito que não há.

| | Dentoral | Dentalpin |
|---|---|---|
| Modelo | Licença comercial com contrato de manutenção | Open source (BSL 1.1 → Apache 2.0 ao fim de 4 anos) |
| Faturação certificada pela AT | ✓ Certificado n.º 906, confirmado no registo | ✗ Não consta do registo |
| SAF-T | ✓ "Faturação e SAF-T" no próprio sistema | ✗ Não existe |
| Anos de produto | ✓ Desde 1992 | ✗ Desde 2026 |
| Clínicas instaladas | ✓ "Centenas de clínicas", declaradas por eles | ✗ Muito poucas ainda |
| Preço publicado | ✗ Nenhum preço em nenhuma página consultada | ~ 0 € autoalojado, plano gerido sem tarifa publicada em Portugal |
| Integração com sistemas de radiografia | ✓ 22 sistemas nomeados | ✗ Guarda imagens, sem ponte para nenhum sistema |
| Leitura de radiografias por IA | ✓ RadIA, com notação FDI e pontuação PAI | ✗ Não existe |
| IA que executa tarefas sobre os dados | ✗ Não aparece nas páginas consultadas | ✓ Agente com as permissões de quem pergunta |
| Odontograma | ✓ Com acesso direto a periodontia, exames e ortodontia | ✓ Registo por dente e por face |
| Periodontograma | ~ Sondagens, mobilidade e furcas registadas; a palavra não aparece | ✓ Seis sítios por dente |
| Receção automática do paciente | ✓ DRHello, cinco métodos de identificação | ✗ Não existe |
| Consentimentos e anamnese em tablet | ✓ Em quatro idiomas | ~ Orçamentos com assinatura, sem módulo de tablet |
| Várias clínicas | ✓ Vários espaços, uma só instalação | ✓ Multi-clínica na mesma instalação |
| API documentada | ✗ Não aparece nas páginas consultadas | ✓ REST, com OpenAPI |
| Código auditável | ✗ Não | ✓ Publicado no GitHub |
| Onde ficam os dados | "Uma só instalação", sem oferta cloud nomeada nas páginas consultadas | ✓ No servidor que a clínica escolher |
| Política de privacidade e termos no site | ✗ Não existem no site consultado | ✓ Publicados |
| Instalação e formação | ✓ Assistidas pela equipa, incluídas no contrato ativo | ✗ Por sua conta |
| Suporte | ✓ "Sem call centers", quem responde desenvolve | ✗ GitHub, sem telefone |
| Entidade que contrata | Duas Ribeiras Soluções de Gestão, Lda., sem NIPC publicado | Sem contrato na versão autoalojada |

Sobre a certificação convém ser preciso, porque é o único número que vale a pena confirmar na fonte.

> **Confirmámos a certificação no registo oficial, não no site deles.** Na consulta pública do Portal das Finanças, a linha do Dentoral lê-se assim: programa "DENTORAL - Software de Gestão para Clínicas Médicas", versão 4.4, produtor "DUAS RIBEIRAS SOLUÇÕES DE GESTÃO LDA", certificado n.º 906, estado "Certificado", data de estado 2011-01-21. A data e a versão são as do estado do certificado, não as da última atualização do programa, que hoje vai na versão 7. Peça-lhes por escrito que versão está coberta. Na mesma lista, o Dentalpin não aparece, porque não emite SAF-T nem fatura certificada.

Duas coisas que o site deles não publica e que valem uma linha. Não há preço em nenhuma página consultada, embora a apresentação da versão 7 revele o modelo ao dizer que a atualização está "incluída no contrato de manutenção activo, sem custos adicionais". E não há política de privacidade nem termos: `/privacidade` e `/termos` devolvem 404, o que é estranho num fornecedor que trata dados clínicos e usa um terceiro de IA.

## Escolha o Dentoral se

E isto vai a sério, não é um trâmite:

- **Quer que o software de gestão emita as faturas.** Certificado n.º 906 no registo da AT e ficheiro SAF-T dentro do sistema. É a razão principal por que esta comparação existe, e nós não a resolvemos hoje.
- **Trinta e quatro anos de produto valem mais do que meses.** O Dentoral é anterior a quase tudo o que está neste blog, e um produto que atravessou três décadas de clínicas resolve problemas que nós ainda não sabemos que existem.
- **Depende das suas integrações de radiografia.** Vinte e dois sistemas nomeados, com as imagens a chegar à ficha "sem exportações, digitalizações ou passos manuais". Nós guardamos imagens e não fazemos ponte para nenhum equipamento.
- **Quer leitura de radiografias por IA hoje.** A RadIA faz isso, com notação FDI e pontuação PAI. O nosso agente de IA trabalha sobre dados de gestão e clínicos, não sobre a imagem.
- **Quer instalação assistida e formação incluídas.** Eles fazem a migração de dados e dão formação nos módulos novos. No Dentalpin autoalojado, isso é consigo.
- **Quer um telefone e uma pessoa.** "Sem call centers, quem responde é quem desenvolve e dá suporte ao produto todos os dias", com sede na Beira Interior. Nós temos GitHub.
- **Tem uma policlínica.** Os formulários por especialidade cobrem clínica geral e fisioterapia no mesmo sistema, com a mesma faturação.

Se a sua clínica usa uma versão anterior à 7, há uma decisão a tomar este ano de qualquer maneira: a Duas Ribeiras avisa no próprio site que vai descontinuar "todas as versões do Dentoral anteriores à versão 7 (a mais recente destas é a 6.7) até ao final de 2026". Esse é o momento certo para pedir preços e condições por escrito, seja a eles ou a quem estiver a avaliar.

## Escolha o Dentalpin se

- **Não quer que a fatura cresça com a clínica.** Abrir um gabinete não devia subir a quota, e na versão autoalojada não sobe.
- **Quer os dados onde decide.** O servidor é seu, o país é o que escolher, e a exportação não depende de pedir nada a ninguém.
- **Quer integrar e automatizar.** Há uma API REST documentada com OpenAPI. No Dentoral não encontrámos nenhuma API nas páginas consultadas.
- **Quer poder auditar o código** que guarda processos clínicos. Está publicado no GitHub, com licença visível.
- **Quer periodontograma como registo próprio.** Seis sítios por dente, com evolução. O Dentoral regista sondagens, mobilidade e furcas, mas a palavra periodontograma não aparece em nenhuma página que consultámos.
- **Tem ou contrata perfil técnico.** Com isso, autoalojar é uma tarde. Sem isso, é um problema que não devia comprar.

![Periodontograma do Dentalpin com os seis sítios por dente](/screenshots/periodontogram.png)

*O periodontograma, com os seis sítios de sondagem por dente e a comparação entre avaliações.*

## Como seria migrar

O módulo `migration_import` importa através do [dental-bridge](https://github.com/dentaltix/dental-bridge), e não é um botão único de propósito:

1. **Peça a exportação completa ao fornecedor atual** antes de decidir o que for: pacientes, histórico clínico, odontograma, orçamentos, faturas com a numeração e catálogo de tratamentos. Peça por escrito.
2. **Carregue o ficheiro** e o sistema valida-o antes de tocar em nada.
3. **Veja a pré-visualização** com contagens e linhas de exemplo. Ainda não foi escrito nada.
4. **Reveja as propostas**: o sistema faz corresponder o catálogo de tratamentos de origem ao seu e você decide linha a linha, aceitar, religar, criar novo ou ignorar. O que pontua acima de 0,9 é aceite em bloco.
5. **Execute**, e a importação corre respeitando as suas decisões.
6. **Compare os contadores** dos dois sistemas: pacientes, faturas e consultas futuras.

> **O SAF-T não é uma migração.** É um ficheiro fiscal e leva o que a AT precisa de ver, não a anamnese, nem o odontograma, nem as radiografias. Quem confunde os dois descobre tarde que exportou a contabilidade e deixou a clínica para trás.

## O que é honesto

Para uma clínica portuguesa que fatura todos os dias, que depende das suas integrações de radiografia e que quer uma IA a ler imagem, o Dentoral resolve hoje três problemas que o Dentalpin não resolve. Dizê-lo de outra maneira seria vender-lhe uma dor de cabeça.

O Dentalpin é a aposta contrária: o software da clínica não devia ser uma caixa preta alugada, e os dados deviam poder sair quando quiser, porque há uma API e um servidor seu. É mais novo e nota-se. Pode [experimentar a demonstração](https://demo.dentalpin.com) sem instalar nada, [ver os preços](/pt/precos/) ou [montá-lo no seu servidor em três minutos](/pt/blog/instalar-dentalpin-em-tres-minutos/) e julgar por si.

## Fontes

Todas consultadas a 2 de outubro de 2026:

- [Dentoral · Duas Ribeiras](https://duasribeiras.com/): "desde 1992", "34 anos a criar software para medicina dentária", "Centenas de clínicas em Portugal, do Continente às Regiões Autónomas", "100% português", os módulos, os 22 sistemas de radiografia nomeados, o DRHello, o DRChat, a DRAnalítica, os formulários por especialidade, a DR·IA e as garantias de privacidade, a licença à XLDent para os EUA e o Canadá, a morada em Caria, Belmonte, e o aviso de descontinuação das versões anteriores à 7 até ao final de 2026. Nenhum preço, nenhuma oferta cloud e nenhuma API aparecem na página. `/privacidade` e `/termos` devolvem 404.
- [Apresentação da Versão 7 (PDF)](https://duasribeiras.com/dentoral-7-apresentacao.pdf), publicada por eles: "3 novos módulos · 20+ novas funcionalidades", os cinco métodos de identificação do DRHello, os quatro idiomas do consentimento RGPD em tablet, a RadIA sobre periapicais, panorâmicas e bitewings, o cruzamento de "sondagens periodontais, mobilidades dentárias, lesões de furca", a nota de que a DR·IA "nunca substituem o julgamento profissional", a atualização "incluída no contrato de manutenção activo" e a razão social "Duas Ribeiras — Soluções de Gestão, Lda.".
- [Lista de programas de faturação certificados pela AT](https://www.portaldasfinancas.gov.pt/pt/consultaProgCertificadosM24.action), no Portal das Finanças: a linha do Dentoral (programa "DENTORAL - Software de Gestão para Clínicas Médicas", versão 4.4, certificado n.º 906, "Certificado", 2011-01-21), a confirmação da razão social "DUAS RIBEIRAS SOLUÇÕES DE GESTÃO LDA" e a ausência do Dentalpin.
- [Consultar o Programa de faturação certificado · gov.pt](https://www.gov.pt/servicos/consultar-o-programa-de-faturacao-certificado): a certificação prévia dos programas de faturação assenta na Portaria n.º 363/2010, de 23 de junho, e no artigo 123.º do CIRC, e a consulta da lista é pública.
- [Licença do Dentalpin](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) e [código-fonte](https://github.com/martinezsalmeron/dentalpin).

Não consultámos nenhum blog agregador, e nada aqui é aconselhamento fiscal: confirme sempre na lista oficial o estado de certificação de qualquer programa que esteja a avaliar, seja o nosso ou outro.

Vê algo errado ou desatualizado nesta comparação? [Diga-nos](https://github.com/martinezsalmeron/dentalpin/discussions) e corrigimos. Vale também se for da Duas Ribeiras.
