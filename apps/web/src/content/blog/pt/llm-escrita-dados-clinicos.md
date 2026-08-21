---
title: "Dar a um LLM acesso de escrita a dados clínicos sem que seja uma loucura"
description: "O modelo nunca escreve: propõe uma operação restrita, o código valida de novo as permissões e uma pessoa confirma cada alteração. Arquitetura e limites."
pubDate: 2026-08-17
translationKey: llm-escritura-datos-clinicos
tags: [ia, llm, arquitetura, seguranca, rgpd]
---

A resposta curta é que o modelo nunca escreve. Propõe a chamada a uma operação restrita e tipada, o seu código volta a verificar as permissões de quem perguntou, e tudo o que altere dados para até uma pessoa confirmar. O LLM interpreta a frase; executá-la continua a ser trabalho de back-end normal.

O que segue é a divisão de responsabilidades que torna isso defensável, o que dizem as autoridades sobre agentes que agem, e por que motivo a janela de confirmação é a peça mais fácil de fazer mal.

## As três propriedades que um agente não pode reunir ao mesmo tempo

A autoridade espanhola de proteção de dados publicou em fevereiro de 2026 orientações sobre IA agêntica que retomam a chamada regra de 2 na versão reformulada para agentes de IA. Define um limiar de garantias que nunca se deve atravessar, apoiado em três propriedades:

1. **Tratar informação não controlada**, isto é, texto que entra no contexto do modelo sem ter sido escrito por uma pessoa autorizada.
2. **Acessar informação sensível**, que numa clínica dentária é, por definição, todo o histórico clínico.
3. **Executar ações automáticas** com efeito dentro ou fora da organização.

Um agente que reúna as três não deveria ser permitido. O documento percorre os casos um a um: quando informação não controlada pode desencadear o acesso a informação sensível, tem de ser impedida qualquer ação automática sem supervisão humana, dentro ou fora da organização.

> **Um assistente de clínica tem as duas primeiras propriedades desde o primeiro dia.** Lê texto escrito por pacientes e por terceiros, e trabalha sobre dados de saúde, categoria especial nos termos do artigo 9 do RGPD. A única das três de que pode prescindir é a terceira, e prescindir dela significa exatamente isto: nenhuma escrita sem uma pessoa presente.

É uma decisão de arquitetura, e toma-se antes de escrever a primeira linha de código. Tudo o resto é consequência.

## Escrita quer dizer ferramentas, não acesso à base de dados

Dar acesso de escrita a um modelo não é dar-lhe uma ligação a PostgreSQL nem um endpoint que aceite SQL. É publicar um catálogo pequeno de operações, cada uma com parâmetros tipados e as mesmas validações que a aplicação já corre.

Para uma frase como "passa a Marta de terça para quinta às dez", o percurso é este:

1. **O modelo recebe a frase e o catálogo de ferramentas**, nunca o esquema da base de dados.
2. **Devolve uma proposta**: que operação quer chamar e com que argumentos. Até aqui não aconteceu nada, é texto.
3. **O back-end valida os argumentos** com o mesmo esquema que valida um formulário, e rejeita o que não encaixe.
4. **As permissões são verificadas outra vez**, para quem perguntou, no ponto de execução.
5. **Se a operação altera dados, para** e pede confirmação explícita, mostrando o que vai mudar.
6. **É executada e fica registada**: que ferramenta, que argumentos, quem pediu e quem confirmou.

O passo 4 é o que se salta. Filtrar a lista de ferramentas antes de a enviar ao modelo ajuda, mas não é controlo de acesso. O controlo tem de estar onde a chamada é executada, porque é o único ponto por onde todas passam.

![Assistente de IA do Dentalpin com a lista de fluxos de trabalho disponíveis e uma conversa aberta](/screenshots/ai-copilot.png)

*O agente propõe; o catálogo da esquerda é tudo o que ele pode chegar a pedir.*

## Privilégio mínimo, aplicado ao agente e não a quem pergunta

As orientações espanholas são explícitas: o princípio base num ambiente de IA agêntica é o do privilégio mínimo, com restrição da escalada de privilégios e da herança de identidade. Na prática reduz-se a uma regra verificável: o agente não pode ver nem fazer nada que a pessoa que pergunta não pudesse fazer na aplicação.

- **Sem identidade própria.** O agente age com a sessão de quem escreve, não com uma conta de serviço de permissões amplas. Uma conta de serviço transforma qualquer falha do modelo em acesso total.
- **Isolado por clínica.** O mesmo agente a servir várias organizações tem de compartimentar memória e contexto, ou acaba a misturar dados de processos que não têm relação.
- **Sem ferramentas que ampliem o alcance.** Cada ferramenta publicada é mais superfície de ataque, e o mesmo documento assinala que acrescentar ferramentas é a forma habitual de conceder privilégios sem dar por isso.
- **Nada irreversível.** Apagar, juntar dois pacientes ou anular uma fatura emitida não são operações de agente, por muitas confirmações que se ponham à frente.

## Uma janela de confirmação não é supervisão humana

É aqui que quase todas as equipas se julgam já cumpridoras. A supervisão tem de ser real, e as autoridades foram concretas quanto ao que isso significa.

O artigo 22 do RGPD reconhece o direito de não ficar sujeito a uma decisão tomada exclusivamente com base em tratamento automatizado que produza efeitos jurídicos ou afete significativamente a pessoa. A autoridade espanhola lembra que um agente pode implicar automatização sem implicar decisão automatizada no sentido do artigo 22, e que, quando implica, há de avaliar as condições do 22.2, as medidas do 22.3 e os limites do 22.4 para categorias especiais de dados.

A CNIL francesa, na sua nota de julho de 2026, vai ao fundo da questão: a simples existência de uma intervenção humana à saída não basta necessariamente para afastar a qualificação de decisão exclusivamente automatizada, e, citando o acórdão SCHUFA do Tribunal de Justiça, essa intervenção tem de ser real, efetiva e influenciar a decisão final, porque uma validação puramente formal ou automática não é suficiente.

> **Se a pessoa que confirma não pode dizer não, não está a supervisionar.** Precisa de ver o que vai mudar, de tempo e legitimidade para recusar, e de que a recusa não lhe custe nada. Um botão premido quarenta vezes por dia sem ler é uma assinatura automática com passos a mais.

E há uma tentação que a autoridade espanhola nomeia diretamente: deslocar toda a responsabilidade para quem usa o sistema ou para a supervisão humana. Quando algo falha é cómodo apontar a quem clicou, em vez do desenho que tornou a falha possível. Nenhum dos dois papéis substitui a diligência de quem decide como o sistema funciona.

## Que autonomia é defensável, conforme o que a ação toca

| | Consultas só de leitura | Escritas com confirmação | Escritas autónomas |
|---|---|---|---|
| Texto não controlado no contexto | ✓ Tolerável | ~ Só com confirmação real | ✗ Reúne as três propriedades |
| Alcança dados do artigo 9 | ~ Com privilégio mínimo | ~ Com privilégio mínimo | ✗ Não defensável |
| Reversível sem restaurar a base | ✓ Nada a desfazer | ✓ Sim | ✗ Depende da operação |
| Artigo 22 em jogo | ✓ Não | ~ Conforme o efeito no paciente | ✗ Sim, se afeta o paciente |
| Quem o log identifica | Quem perguntou | Quem perguntou e quem confirmou | Ninguém |

A última coluna não é um caso para desenhar melhor. É um caso para não construir enquanto as outras duas propriedades continuarem lá.

## O log tem de reconstituir a decisão, não apenas a escrita

Guardar o `UPDATE` não chega. O que tem de ser possível reconstituir é a cadeia toda: o que foi pedido, o que o modelo propôs, o que foi validado, quem confirmou e que dados se moveram.

As orientações espanholas chamam-lhe rastreabilidade do dado ao longo de todo o ciclo de vida, e pedem que se guardem logs da informação tratada pelos passos de raciocínio, das fontes consultadas e dos serviços usados. A CNIL pede o mesmo do lado de quem usa o sistema: para cada tarefa executada deveria ser possível identificar os dados pessoais envolvidos, os agentes que intervieram, os serviços de terceiros chamados e a respetiva cronologia.

O Comité Europeu para a Proteção de Dados publicou em abril de 2025 o guia *AI Privacy Risks & Mitigations – Large Language Models (LLMs)*, que a CNPD divulgou como uma metodologia abrangente para identificação, avaliação e mitigação de riscos de privacidade, ligada aos artigos 25 e 32 do RGPD. É o ponto de partida prático se ainda não tem avaliação de impacto feita.

![Ficha de paciente do Dentalpin, separador de atividade, com a cronologia filtrável por consultas, tratamentos e comunicações](/screenshots/patient-timeline.png)

*A cronologia do paciente é onde uma alteração feita pelo agente tem de aparecer como qualquer outra.*

## O que decidimos não dar ao modelo

Reduzir o alcance eliminou mais risco do que qualquer medida acrescentada depois.

- **O texto clínico livre não sai.** Os identificadores do paciente passam a códigos determinísticos antes de saírem para o fornecedor de IA, e as notas clínicas em texto livre ficam fora desse caminho.
- **Nem diagnóstico nem indicação terapêutica.** Propor um tratamento muda aquilo que o produto é e as obrigações que vêm com ele. Agenda, cobranças, reforços e pesquisas não são isso.
- **Nenhuma ação proativa sobre dados.** O resumo da manhã é produzido por consultas determinísticas, sem LLM e sem dados de paciente a sair. É a lição mais útil do projeto: boa parte do que se pede a um agente não precisa de modelo nenhum.

## Antes de pôr em produção

1. **Escreva a lista de operações que o agente pode chamar** e justifique cada uma. Se não cabe numa página, é grande demais.
2. **Teste uma injeção indireta**: ponha instruções num campo de texto preenchido por um paciente e confirme que o agente não as segue. As orientações espanholas distinguem a injeção direta da indireta, que esconde instruções nas fontes consultadas pelo agente.
3. **Tente escalar privilégios**: entre com uma conta limitada e peça algo fora do seu alcance. Se o agente o fizer, o controlo estava no lugar errado.
4. **Leia o log de uma conversa completa** e verifique se um terceiro conseguiria reconstituir o que aconteceu.
5. **Conte as confirmações por dia.** Se são muitas, a supervisão degrada-se sozinha, e isso é um problema de desenho, não de pessoas.
6. **Documente o que sai para o fornecedor de IA**, com que base jurídica e sob que contrato do artigo 28.

No Dentalpin o agente funciona assim: chama as mesmas operações da aplicação, revalida as permissões no ponto de execução, converte os dados do paciente em códigos antes de saírem, para a pedir confirmação em qualquer escrita e deixa cada chamada no log de auditoria. Se quiser observá-lo com a instalação no seu próprio servidor, as condições estão em [preços](/pt/precos/).

## Fontes

- AEPD (autoridade espanhola), *Inteligencia artificial agéntica desde la perspectiva de protección de datos*, V1.2, fevereiro de 2026: regra de 2 (pp. 41-43), artigo 22 (pp. 39-40), injeção de prompts (pp. 51-52), rastreabilidade (pp. 68-69), gestão de privilégios (pp. 70-71). [aepd.es](https://www.aepd.es/guias/orientaciones-ia-agentica.pdf). Consultado a 17 de agosto de 2026.
- CNIL / CIANum, *IA agentique et protection des données personnelles*, julho de 2026. [cnil.fr](https://www.cnil.fr/sites/default/files/2026-07/ia-cianum-cnil.pdf). Consultado a 17 de agosto de 2026.
- CNPD, divulgação do guia do Comité Europeu para a Proteção de Dados *AI Privacy Risks & Mitigations – Large Language Models (LLMs)*, 11 de abril de 2025. [cnpd.pt](https://www.cnpd.pt/comunicacao-publica/noticias/guia-do-comite-europeu-apresenta-metodologia-para-gerir-riscos-de-privacidade-em-sistemas-de-ia/). Consultado a 17 de agosto de 2026.
- Regulamento (UE) 2016/679 (RGPD), artigos 9, 22, 28 e 32.

Isto não é aconselhamento jurídico. Se o seu sistema toma decisões que afetam pacientes, avalie o caso concreto com o seu encarregado de proteção de dados antes de o pôr a funcionar.
