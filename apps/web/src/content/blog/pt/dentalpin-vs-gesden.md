---
title: "Dentalpin frente ao Gesden: o que muda mesmo para a sua clínica"
description: "Comparação honesta entre o Gesden, o software dentário mais usado em Espanha, e o Dentalpin, que é open source e grátis. Com fontes e sem adjetivos."
pubDate: 2026-07-28
tags: [comparacao, gesden, software-dentario]
---

Se dirige uma clínica em Espanha e procura software de gestão, o Gesden aparece em primeiro lugar. É razoável: está no mercado há mais de trinta anos e o seu fabricante, a Infomed, declara **14 000 clínicas** a usá-lo.

Nós fazemos o Dentalpin, por isso não somos neutros. O que podemos ser é exatos.

> **Como ler esta comparação.** Tudo o que aqui se afirma sobre o Gesden sai de páginas publicadas pela Infomed, com link e data no fim. Nada de blogs agregadores: contradizem-se uns aos outros e alguns são escritos por concorrentes. E há uma secção inteira sobre quando o Gesden é a melhor opção, porque há.

## Em trinta segundos

**Gesden** é o produto maduro: trinta anos, 14 000 clínicas, mais de 50 técnicos de apoio e 400 migrações por ano. Se o que precisa é de um número para ligar quando o software pára numa terça-feira de manhã, essa estrutura têm-na eles e não nós.

**Dentalpin** é open source e grátis: sem licença por cadeira, por dentista ou por paciente, com o código publicado e os dados onde você decidir. Em troca, é de 2026 e instala-se no seu servidor: alguém tem de tratar da máquina.

A pergunta não é qual é melhor. É se a sua clínica tem perfil técnico ou não.

## O que é o Gesden

Software de gestão para clínica dentária da Infomed, em duas linhas de produto:

- **Gesden G5**: aplicação de computador, exige Windows 10 ou superior.
- **Gesden ONE**: versão na cloud, acessível pelo navegador.

O G5 é vendido em três versões conforme o número de licenças: *Easy* (até 3), *Profesional* (até 6) e *Grandes Clínicas/Multicentro* (ilimitadas).

Em funcionalidades é um produto profundo e maduro: histórico clínico com odontograma, periodontograma com comparação de evolução, agenda com várias salas e vários centros, orçamentos, ciclo completo de faturação, apoio no tratamento com seguradoras, mais de 150 tipos de relatórios configuráveis, reforços de consulta, controlo de despesas e fornecedores, e módulo de ortodontia.

À volta do núcleo há **módulos opcionais** contratados à parte: `dentIA` (análise de radiografias com IA), `CLINIPAD` (assinatura digital), SMS e email, `ONE PAY` (pagamentos), Dashboard, `DIDACTIC` (casos em 3D), agenda móvel e marcação online. O Verifactu é também um produto separado.

## O que é o Dentalpin

Software de gestão dentária open source. Descarrega o código, instala-o onde quiser (o seu servidor, o fornecedor de cloud que escolher) e não paga licença por cadeira, por dentista ou por paciente.

Odontograma, periodontograma completo, agenda, histórico clínico, planos de tratamento, orçamentos com assinatura, faturação, pagamentos, reforços de consulta e relatórios. Verifactu incluído como módulo, não como produto à parte. E um assistente de IA que executa tarefas sobre os seus dados reais respeitando as permissões de cada pessoa.

É muito mais novo. Isso conta, e voltamos ao assunto.

## Cara a cara

Só linhas verificáveis. Onde não há dado público, dizemo-lo.

| | Gesden | Dentalpin |
|---|---|---|
| Modelo | Licença comercial | Open source (BSL 1.1 → Apache 2.0 ao fim de 4 anos) |
| Instalação | Computador com Windows 10+ · ONE na cloud | O seu servidor, o seu fornecedor, ou local |
| Preço publicado | ✗ Não publica preços | ✓ 0 €, tudo incluído |
| Módulos | ~ Vários contratam-se à parte | ✓ Todos incluídos |
| Verifactu | ~ Produto separado | ✓ Módulo incluído |
| Onde vivem os dados | Conforme o produto e a instalação | ✓ Onde você decidir |
| Código auditável | ✗ Não | ✓ Publicado no GitHub |
| API documentada | ✗ Não publicamente | ✓ REST completa, OpenAPI |
| Anos no mercado | ✓ Mais de 30 | ✗ Desde 2026 |
| Clínicas a usá-lo | ✓ 14 000 declaradas | ✗ Muito poucas ainda |
| Apoio telefónico | ✓ Mais de 50 técnicos | ✗ Telegram e GitHub |

Sobre o preço convém ser preciso, porque circula muito ruído.

> **A Infomed não publica preços no seu site**: remete para o coordenador de zona. Há blogs que citam valores muito diferentes entre si, de 99 €/mês a licenças perpétuas de 2 000 a 3 000 €, e **nenhum deles é a Infomed**. Se o número lhe importa, peça-o a eles.

## Escolha o Gesden se

E isto vai a sério, não é formalidade:

- **Quer um número para ligar.** Mais de 50 técnicos de apoio e trinta anos de rodagem em clínicas espanholas. Nós temos um canal de Telegram e o GitHub. Se o software pára e você fatura 8 000 € nesse dia, a diferença é real.
- **Precisa de migrar e de que alguém trate disso.** 400 migrações por ano é um músculo que não se improvisa.
- **A sua clínica já trabalha com Gesden e toda a gente o sabe usar.** Mudar de software custa semanas de produtividade. Existir algo grátis não é razão suficiente.
- **Depende de integrações concretas** com os seus equipamentos de imagem e já funcionam.
- **Não tem ninguém técnico nem quer ter.** O Dentalpin instala-se no seu servidor. Alguém tem de tratar da máquina e das cópias de segurança.

Um produto com 14 000 clínicas por trás resolve problemas que nós ainda não sabemos que existem.

## Escolha o Dentalpin se

- **Lhe incomoda que os seus dados clínicos vivam onde não é você a decidir.** Aqui escolhem você e o seu servidor.
- **A fatura cresce com a clínica e não lhe faz sentido.** Abrir mais uma sala não devia subir a mensalidade.
- **Tem ou contrata perfil técnico.** Então instalar no seu servidor é uma tarde, não um problema.
- **Quer integrar e automatizar.** É tudo uma API documentada, não um formulário fechado.
- **Quer poder auditar o código** que guarda históricos clínicos. Está publicado.
- **Verifactu sem produto adicional.** Vem dentro.

## Como seria migrar

O módulo `migration_import` importa através do [dental-bridge](https://github.com/dentaltix/dental-bridge), e não é um botão único de propósito:

1. **Carrega o ficheiro** e o sistema valida-o antes de mexer em nada.
2. **Vê uma pré-visualização** com contagens e linhas de exemplo. Ainda não foi escrito nada.
3. **Revê as propostas**: o sistema faz corresponder o catálogo de tratamentos de origem ao seu e você decide linha a linha (aceitar, religar, criar novo ou ignorar). O que pontua acima de 0,9 é aceite em bloco.
4. **Executa**, e a importação corre respeitando as suas decisões.

> O passo 3 é onde falham quase todas as migrações. Duas clínicas nunca codificam os tratamentos da mesma maneira, e **uma equivalência adivinhada em silêncio produz faturas mal emitidas que ninguém deteta senão meses depois**.

## O que é honesto

O Gesden é um produto maduro, com uma base de clientes enorme e um apoio que nós não temos. Se a sua prioridade é que alguém atenda o telefone amanhã, é a escolha sensata hoje.

O Dentalpin é a aposta contrária: o software da sua clínica não devia ser uma caixa preta alugada. É mais novo e nota-se. Pode [experimentar a demo](https://demo.dentalpin.com) sem instalar nada, ou [montá-lo no seu servidor em três minutos](/pt/blog/instalar-dentalpin-em-tres-minutos/) e julgar por si.

## Fontes

Todas consultadas a 28 de julho de 2026:

- [Gesden G5 · Infomed](https://www.infomedsoftware.com/software/gesden/gesden-g5/): versões, funcionalidades, módulos opcionais, requisitos de Windows, números de clínicas, apoio e migrações.
- [Gesden ONE](https://www.gesdenone.com/): produto na cloud.
- [Licença do Dentalpin](https://github.com/martinezsalmeron/dentalpin/blob/main/LICENSE) e [código-fonte](https://github.com/martinezsalmeron/dentalpin).

Vê algo errado ou desatualizado nesta comparação? [Diga-nos](https://github.com/martinezsalmeron/dentalpin/discussions) e corrigimos. Vale também se for da Infomed.
