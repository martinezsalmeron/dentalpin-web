---
title: "Enviar uma radiografia ou um relatório: o canal importa mais do que o consentimento"
description: "A CNPD manda cifrar a informação e remeter a chave por outro meio de comunicação. O que isso significa na clínica dentária, e porque o WhatsApp não resolve."
pubDate: 2026-10-07
translationKey: enviar-datos-de-pacientes-por-email-o-whatsapp
tags: [rgpd, protecao-de-dados, historico-clinico, seguranca]
---

O ortodontista pede a panorâmica, o laboratório pede as fotografias, o paciente pede o relatório "por WhatsApp". O consentimento é a parte fácil dos três casos: quase sempre existe, e quando falta obtém-se em trinta segundos. O difícil é o canal, e a posição da CNPD sobre isso tem duas metades que andam sempre juntas: cifrar a informação, e remeter a chave da cifra por um meio diferente do correio eletrónico.

Isto não é aconselhamento jurídico. É a leitura das fontes oficiais citadas no final, consultadas a 7 de outubro de 2026.

## Isto não é nenhuma das outras quatro perguntas

Cinco assuntos confundem-se sistematicamente, e quatro já têm resposta noutro sítio.

- **Os lembretes de consulta** não levam conteúdo clínico. São uma data e uma hora, e o problema aí é de consentimento: ver [os lembretes por WhatsApp](/pt/blog/lembretes-de-consulta-whatsapp/) e [a comparação de canais](/pt/blog/sms-whatsapp-email-lembretes/).
- **O direito de acesso** decide o que tem de entregar e em que prazo quando [o paciente pede o seu processo clínico](/pt/blog/paciente-pede-o-seu-processo-clinico/). Resolve o quê, e diz muito pouco do como.
- **O RGPD da clínica** é o enquadramento geral: [fundamentos de licitude, registo, prazos](/pt/blog/rgpd-clinica-dentaria/).
- **Aqui** responde-se à pergunta diária que vem depois: já decidiu que algo tem de sair e para quem. Falta por que via.

> **O consentimento torna a comunicação lícita, não a torna segura.** São duas camadas independentes do artigo 32.º do RGPD. Um envio perfeitamente consentido para o endereço errado continua a ser uma violação de dados, e nenhum formulário a repara depois.

## O mecanismo que a CNPD descreve

Na sua orientação de 11 de abril de 2023 sobre a disponibilização de dados pessoais no âmbito de procedimentos administrativos, a CNPD descreve o procedimento em duas partes inseparáveis:

> **Cifrar e separar a chave.** A CNPD escreve que *"deve a entidade administrativa adotar medidas técnicas que garantam a integridade e confidencialidade dos dados pessoais (v.g., na disponibilização por correio eletrónico, cifrar a informação que contenha dados pessoais e remeter a chave da cifra por outro meio de comunicação diferente do correio eletrónico)."*

Vale a pena ser exato sobre o que esta orientação é e não é. Foi escrita para entidades administrativas e procedimentos administrativos, não para clínicas, e não é por isso uma instrução dirigida ao setor da saúde. O que ela estabelece é o mecanismo que a autoridade nacional considera adequado para enviar dados pessoais por correio eletrónico, e esse mecanismo é o mesmo, com mais razão quando os dados são de saúde.

A mesma orientação acrescenta um ponto que na clínica se esquece: deve informar-se o terceiro a quem se concede o acesso de que *"qualquer ulterior comunicação ou divulgação dos dados pessoais obedece ao regime previsto no RGPD"*, passando ele a assumir a qualidade de responsável pelo tratamento. Quem recebe a radiografia fica com obrigações próprias.

![Processo de um paciente com odontograma, alertas clínicos, plano de tratamento ativo e próxima consulta](/screenshots/dental-chart.png)

*O processo de onde sai o documento pedido: odontograma, alertas clínicos e plano de tratamento ativo.*

## As verificações concretas que a CNPD pede no correio eletrónico

A Diretriz/2023/1, sobre medidas organizativas e de segurança, é dirigida a todos os responsáveis pelo tratamento e desce ao detalhe operacional. Pede que se definam *"de forma clara e inequívoca políticas e procedimentos internos sobre o específico envio de mensagens de correio eletrónico contendo dados pessoais"*, com verificações adicionais que incluem:

- **Destinatários em Bcc**, isto é *"garantir a inserção dos endereços de correio eletrónico dos destinatários no campo 'Bcc:', nos casos de múltiplos destinatários"*.
- **Erros de digitação**, isto é *"prevenir erros na introdução manual de endereços de correio eletrónico"*. É a causa mais banal de violação numa clínica, e a que nenhuma cifra corrige.
- **Anexos mínimos**, isto é *"assegurar que os ficheiros enviados em anexo contêm apenas os dados pessoais que se pretendem comunicar"*. Enviar o processo inteiro quando pedem uma radiografia falha aqui.
- **Atraso programado no envio.** A diretriz sugere criar regras para *"adiar/atrasar a entrega de mensagens de correio eletrónico contendo dados pessoais, mantendo-as na 'Caixa de Saída' por um tempo determinado, permitindo verificações de conformidade, após clique em 'Enviar'"*.

Esse último ponto é o mais útil e o mais fácil de aplicar: dois minutos de atraso na caixa de saída é a única medida desta lista que apanha o erro depois de já ter acontecido.

## Porque a cifra de ponta a ponta não resolve

O argumento habitual é que o WhatsApp cifra de ponta a ponta e por isso serve. Não serve, porque o transporte nunca foi o único problema. O que fica fora da cifra é quase tudo o que importa aqui.

- **Os metadados.** Quem fala com uma clínica dentária, quando e com que frequência. Uma conversa semanal com uma clínica dentária é em si uma informação de saúde.
- **O equipamento.** A mensagem é decifrada num telemóvel, normalmente o pessoal de alguém da equipa, com a sua galeria e as suas permissões de aplicações.
- **A cópia de segurança.** Uma radiografia enviada por mensagem acaba na cópia automática do telemóvel. Aí a cifra de ponta a ponta já não tem papel nenhum.
- **A relação de subcontratação.** Um serviço de mensagens de consumo não é subcontratante da clínica nos termos do artigo 28.º do RGPD, e não há contrato.

> **O assunto e o corpo da mensagem nunca vão cifrados.** É o detalhe que anula metade dos envios bem feitos: o anexo está protegido e o assunto diz "Radiografia da Sra. Pereira". O nome do paciente acabou de circular em claro.

## Os canais, um a um

| Canal | Serve para conteúdo clínico? | O que decide |
|---|---|---|
| Correio com anexo cifrado e chave por outra via | ✓ Sim | É o mecanismo descrito pela CNPD |
| Correio com S/MIME ou PGP entre parceiros habituais | ✓ Sim | Não há palavra-passe a trocar a cada envio |
| Correio sem cifra | ✗ Não | Artigo 32.º do RGPD e orientação da CNPD |
| WhatsApp e mensagens de consumo | ✗ Não | Metadados, cópia do telemóvel, sem subcontratação |
| Fax | ✗ Não | Transmissão sem cifra e erros de marcação |
| Carta em envelope fechado | ~ Possível | Protegido, mas sem rasto útil |
| Entrega em mão na clínica, em suporte cifrado | ✓ Sim | Não há transmissão e a identidade confirma-se no local |
| Portal do paciente com sessão autenticada | ✓ Sim | Autenticação, registo de acessos, sem chave fora de banda |

## Como fazer um envio que se sustenta

1. **Fixe o fundamento antes do canal.** Pedido do próprio paciente, referenciação consentida, ou obrigação legal. Se não for nenhum dos três, cifrar não compõe nada.
2. **Confirme a identidade e o endereço.** É o erro que a diretriz manda prevenir, e nenhuma cifra o corrige.
3. **Cifre o ficheiro, não só a ligação.** Um contentor com cifra AES de 256 bits ou superior, definida ao criar o ficheiro.
4. **Remeta a chave por outro meio.** Telefone, SMS ou em mão. O mesmo correio não é outro meio.
5. **Deixe o assunto e o corpo sem dados.** Sem nome, sem número de processo, sem diagnóstico. "Documentação solicitada" basta.
6. **Anexe só o que foi pedido.** Uma radiografia não é o processo clínico completo.
7. **Registe o envio no processo.** O quê, para quem, quando e com que fundamento. Sem isso não demonstra depois que a comunicação foi legítima.
8. **Apague a cópia de trabalho.** O PDF gerado para o envio não tem de ficar no computador da receção.

![Cronologia de um paciente com alertas clínicos, plano ativo e filtros por consultas, tratamentos, movimentos financeiros e comunicações](/screenshots/patient-timeline.png)

*O separador de atividade de um processo, com o filtro de comunicações entre os restantes tipos de registo.*

## A entrega em mão continua a ser a via mais simples

Antes de instalar o que for, resta a solução que nenhum fornecedor promove porque não vende nada: entregar ao paciente a sua referenciação e a sua radiografia na clínica, em suporte cifrado. Não há transmissão, a identidade confirma-se a olhar para a pessoa, e o ato fica anotado no processo. Para um paciente que vem de qualquer forma à consulta, é o caminho mais curto.

## A conclusão honesta é deixar de enviar ficheiros

Tudo o que está acima é uma lista de cautelas para um envio que, feito de outra maneira, não acontece. Se o documento for recolhido a partir de uma sessão autenticada em vez de viajar como anexo, desaparece exatamente o que dá problemas: nenhuma chave por um segundo canal, nenhum ficheiro na cópia de segurança de terceiros, e um registo de quem o abriu e quando.

É isso que faz um [portal do paciente](/pt/blog/portal-do-paciente/), e é a razão pela qual a recomendação deste artigo é essa e não o correio cifrado. No Dentalpin o documento é publicado no portal e cada acesso fica registado com autor e data, pelo que o envio por correio fica para os casos sem alternativa. O código é aberto, portanto o registo audita-se em vez de se acreditar, e o [preço está publicado](/pt/precos/).

## Fontes

- Comissão Nacional de Proteção de Dados, "Orientação relativa à disponibilização de dados pessoais no âmbito de procedimentos administrativos", 11 de abril de 2023, parágrafos 40 e 41: [cnpd.pt](https://www.cnpd.pt/media/0w0c1qxn/2023-04-11_disponibiliza%C3%A7%C3%A3o-de-dados-no-%C3%A2mbito-de-procedimentos-administrativos.pdf). Consultada a 7 de outubro de 2026. Dirigida a entidades administrativas, e citada aqui pelo mecanismo que descreve.
- Comissão Nacional de Proteção de Dados, "Diretriz/2023/1 sobre medidas organizativas e de segurança aplicáveis aos tratamentos de dados pessoais", ponto relativo à ferramenta de correio eletrónico: [cnpd.pt](https://www.cnpd.pt/comunicacao-publica/noticias/diretriz-sobre-medidas-de-seguranca/). Consultada a 7 de outubro de 2026.
- Regulamento (UE) 2016/679 (RGPD), artigos 9.º, 28.º e 32.º: [eur-lex.europa.eu](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consultado a 7 de outubro de 2026.
