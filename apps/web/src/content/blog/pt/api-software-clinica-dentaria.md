---
title: "A API do seu software dentário: o que devia poder fazer com os seus próprios dados"
description: "O que uma API de software dentário tem de permitir: ler, escrever, ser avisado e sair. As perguntas a fazer antes de assinar e como testá-la em vinte minutos."
pubDate: 2026-08-30
translationKey: api-software-clinica-dental
tags: [api, integracoes, contratos, exportar-dados, rgpd]
---

Devia poder ler e escrever, a partir de fora do programa, as quatro coisas em torno das quais a clínica gira: pacientes, consultas, orçamentos e faturas. Com as suas credenciais, sem pedir autorização a ninguém e sem contratar um módulo à parte. É este o exame prático, e muito poucos softwares dentários o passam por inteiro.

A lei garante-lhe bastante menos do que isso, mas garante alguma coisa. Vale a pena saber o quê antes de se sentar a negociar.

## Uma API é a segunda porta do programa

O ecrã é a porta por onde entram as pessoas. A API é a porta por onde entram outros programas, com a mesma fechadura e as mesmas permissões.

Quando existe, o formulário de marcação do site escreve diretamente na agenda e ninguém volta a digitar nada. Quando não existe, cada integração transforma-se numa pessoa a copiar dados de um ecrã para outro.

![Ficha de um paciente no ecrã com os dados pessoais, os contactos e os dados de faturação](/screenshots/patients.png)

*A ficha de um paciente, com os dados pessoais, os contactos e a faturação distribuídos por separadores.*

## As quatro coisas que uma API tem de lhe permitir

- **Ler.** Tirar a lista de pacientes, as consultas de um intervalo de datas, os orçamentos aceites do trimestre. É isto que alimenta um relatório ou um painel.
- **Escrever.** Criar uma consulta, registar um paciente, marcar uma fatura como paga. Sem escrita, a integração serve para olhar e pouco mais.
- **Avisá-lo.** Um webhook é o programa a chamar o seu sistema quando acontece alguma coisa, em vez de o seu sistema perguntar de cinco em cinco minutos se aconteceu.
- **Deixá-lo sair.** Uma descarga completa de tudo, que não é a API nem a substitui.

> **Uma API não é uma cópia de segurança nem é uma exportação.** Serve para mover um dado agora, não para reconstruir a clínica na manhã em que o servidor não arranca. Se lhe apresentarem a API como resposta a "como é que tiro os meus dados", falta metade da resposta.

## O que a lei garante e o que não garante

Há aqui uma confusão que sai cara. O direito à portabilidade do RGPD é do paciente, não da clínica.

O artigo 20.º, n.º 1 dá ao titular o direito de receber os dados pessoais que lhe digam respeito "num formato estruturado, de uso corrente e de leitura automática" e de os transmitir a outro responsável. O n.º 2 acrescenta o direito a que sejam transmitidos diretamente entre responsáveis "sempre que tal for tecnicamente possível". E o artigo 15.º, n.º 3 obriga a entregar uma cópia, em formato eletrónico de uso corrente quando o pedido chega por meios eletrónicos.

Numa clínica dentária, o responsável pelo tratamento costuma ser você e o fornecedor do software é o subcontratante. Ou seja: o paciente exerce esse direito contra a clínica, e a clínica precisa que o software o saiba cumprir. O RGPD não lhe dá, por si só, uma API oponível ao seu fornecedor.

O que começa a dar-lhe alguma coisa é o regulamento europeu dos dados, o Data Act (Regulamento (UE) 2023/2854), aplicável desde 12 de setembro de 2025:

- **Interfaces abertas e gratuitas.** O artigo 30.º, n.º 2 obriga os prestadores de serviços de tratamento de dados a disponibilizar interfaces abertas a todos os clientes de forma gratuita, com informação suficiente "para permitir o desenvolvimento de software que comunique com os serviços".
- **Exportação ao mudar.** O artigo 30.º, n.º 5 obriga a exportar, a pedido do cliente, todos os dados exportáveis num formato estruturado, de uso corrente e de leitura automática.
- **Sem custos de saída a partir de 2027.** O artigo 29.º, n.º 1 proíbe qualquer encargo de mudança a partir de 12 de janeiro de 2027. Até lá são admitidos encargos reduzidos, limitados ao custo real.

> **Estas obrigações são sobre a mudança de fornecedor, não sobre a sua automatização diária.** E aplicam-se ao que o regulamento chama serviço de tratamento de dados, definido no artigo 2.º, n.º 8 como, no essencial, um serviço na nuvem. Se o seu software está licenciado e instalado num servidor da clínica, esse capítulo não é a sua alavanca. A sua alavanca é o contrato.

Isto não é aconselhamento jurídico. As referências e as datas de consulta estão no fim.

## Exportação, API e webhooks resolvem problemas diferentes

| | Exportação | API | Webhooks |
|---|---|---|---|
| Para que serve | Levar tudo consigo | Mover um dado agora | Saber que aconteceu algo |
| Com que frequência | ✓ Pontual ou mensal | ✓ Contínua | ✓ No momento |
| Serve para migrar | ✓ Sim, é a sua função | ~ Lenta e aos bocados | ✗ Não |
| Serve para integrar | ✗ Não | ✓ Sim | ✓ Sim |
| Serve como cópia de segurança | ~ Só se a guardar fora | ✗ Não | ✗ Não |
| Costuma estar incluída | ✓ Quase sempre | ~ Depende do fornecedor | ~ Depende do fornecedor |

## As sete perguntas a fazer antes de assinar

1. **Onde está a documentação e posso vê-la agora, sem assinar nada?** Um URL público que consegue abrir hoje diz mais do que qualquer resposta comercial. Se lhe enviarem um PDF, pergunte de que ano é.
2. **Está incluída na mensalidade ou é um módulo à parte?** E se for à parte, quanto custa e com que limite de chamadas. Uma API paga ao uso muda o desenho de tudo o que construir por cima.
3. **É só de leitura?** Metade do valor está na escrita. Uma API só de leitura não consegue criar a consulta que um paciente acabou de marcar no seu site.
4. **Que entidades cobre exatamente?** Pacientes, consultas, orçamentos, tratamentos, faturas, documentos, odontograma. Peça a lista, não a promessa, e verifique se o histórico clínico está dentro ou fora.
5. **Há webhooks e que eventos emitem?** Sem eles, qualquer integração acaba a perguntar em ciclo, que é o caminho mais rápido para bater num limite de chamadas.
6. **Quais são os limites?** Chamadas por minuto, tamanho de página, número de credenciais. Um limite publicado é bom sinal; um limite que ninguém lhe sabe dizer é um limite que vai descobrir em produção.
7. **O que acontece no dia em que sair?** Que a API continue ativa durante o pré-aviso, com acesso completo de leitura, devia estar escrito no contrato ao lado da cláusula de exportação.

## Cinco coisas que se resolvem sozinhas quando há API

- **O site escreve na agenda.** O paciente marca, a consulta aparece, ninguém transcreve nada à noite.
- **Os números do trimestre para o contabilista.** Um relatório que se gera sozinho no dia 1, em vez de uma tarde a exportar e a conferir à mão.
- **Lembretes pelo canal que já usa.** Se o seu fornecedor de mensagens não está integrado, com API liga-o você. Sem API, espera que o fornecedor o faça.
- **Um painel de indicadores próprio.** Ocupação da cadeira, aceitação de orçamentos e dívida em aberto, com as suas definições e não com as do fabricante.
- **Limpar duplicados em bloco.** Detetá-los lendo toda a base é meia hora. Fazê-lo ecrã a ecrã é um mês.

![Vista de dia da agenda com as consultas distribuídas por colunas e por faixas horárias](/screenshots/schedule-day.png)

*A agenda em vista de dia, com as consultas distribuídas por colunas e faixas horárias.*

## Como testá-la em vinte minutos sem ser programador

1. **Peça o URL da documentação.** Abra-o no telemóvel à frente do comercial. Ou carrega, ou já ficou a saber alguma coisa.
2. **Procure a secção de autenticação.** Tem de explicar como se obtém uma credencial sem telefonar ao suporte.
3. **Peça acesso a um ambiente de testes.** Nunca faça a primeira chamada contra os dados reais da clínica.
4. **Copie o exemplo da própria documentação.** Quase todas trazem uma linha pronta a colar num terminal:

```bash
curl -H "Authorization: Bearer $TOKEN" https://api.exemplo.com/v1/patients
```

5. **Teste uma escrita.** Criar uma consulta de teste e vê-la aparecer na agenda é o momento em que sabe se a integração é real.
6. **Procure a palavra "limite" na documentação.** Se não aparecer, pergunte por escrito e guarde a resposta.

Se algum destes seis passos exigir uma reunião, isso também é uma resposta.

## Onde entra o DentalPin

No DentalPin cada funcionalidade expõe um endpoint REST documentado em OpenAPI, incluído no preço e com webhooks, porque o produto instala-se no seu servidor e uma integração não devia depender de nós a autorizarmos. O que está incluído vê-se em [preços](/pt/precos/).

## Fontes

- Regulamento (UE) 2016/679 (RGPD), artigos 15.º n.º 3, 20.º n.º 1 e 20.º n.º 2: [eur-lex.europa.eu, CELEX 32016R0679](https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32016R0679). Consultado a 30 de agosto de 2026.
- Regulamento (UE) 2023/2854 (Data Act), artigos 2.º n.º 8, 29.º n.º 1, 29.º n.º 2, 30.º n.º 2, 30.º n.º 5 e 50.º: [eur-lex.europa.eu, CELEX 32023R2854](https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32023R2854). Consultado a 30 de agosto de 2026.
