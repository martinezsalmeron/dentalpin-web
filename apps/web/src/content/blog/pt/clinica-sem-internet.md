---
title: "O dia em que a internet cai: trabalhar na clínica dentária sem ligação"
description: "O que deixa de funcionar numa clínica dentária quando a linha cai, o que continua, o que preparar antes e por que ordem acertar o dia quando a linha volta."
pubDate: 2026-09-13
translationKey: clinica-sin-internet
tags: [continuidade, infraestrutura, agenda, gestao-de-clinica]
---

Se o programa corre no navegador contra o servidor de outra pessoa, uma queda de linha para a clínica inteira, agenda, histórico clínico e odontograma incluídos. Se corre num servidor dentro da clínica, perde os lembretes, a marcação online, a receita eletrónica e provavelmente o terminal de pagamento, mas continua a poder abrir a agenda do dia e a escrever no histórico.

Saber qual das duas situações é a sua decide tudo o resto, e convém confirmar isso hoje e não na terça-feira em que acontecer. A seguir está o que cai exatamente, o que convém ter preparado, o que apontar enquanto dura e por que ordem acertar tudo depois.

## Onde corre o programa decide o que perde

Não há uma resposta única para "consigo trabalhar sem internet", porque existem três arquiteturas diferentes por trás da palavra programa e cada uma comporta-se à sua maneira.

| O que precisa de fazer | Navegador contra servidor remoto | Servidor dentro da clínica | Programa instalado em cada posto |
|---|---|---|---|
| Abrir a agenda do dia | ✗ Não | ✓ Sim | ✓ Sim |
| Consultar o histórico e o odontograma | ✗ Não | ✓ Sim | ✓ Sim |
| Escrever notas, orçamentos e faturas | ✗ Não | ✓ Sim | ✓ Sim |
| Ver radiografias já guardadas | ✗ Não | ✓ Sim | ~ Consoante onde estejam as imagens |
| Lembretes, marcação online e portal do paciente | ✗ Não | ✗ Não | ✗ Não |
| Cópia de segurança fora da clínica | ✗ Não | ~ Retoma quando a linha volta | ~ Retoma quando a linha volta |

A linha que mais surpreende é a das radiografias. Um sensor pode estar ligado à rede local e gravar numa pasta da clínica, ou pode enviar para o serviço do fabricante, e da receção as duas coisas parecem iguais até ao dia em que não há linha.

![Esquema da instalação: navegador, Caddy na porta 443, frontend Nuxt, API e PostgreSQL com os seus volumes de dados](/diagrams/install-stack.svg)

*O navegador, o Caddy, o frontend, a API e a base de dados. O esquema não diz onde está fisicamente essa máquina, e essa é exatamente a pergunta a responder antes de uma avaria.*

## O que cai, pela ordem em que vai dar por isso

- **A marcação online para sem fazer barulho.** Ninguém avisa: simplesmente não entram marcações durante aquelas horas, e não há forma de saber quantas se perderam.
- **Os lembretes não saem.** SMS, WhatsApp e correio eletrónico saem de fora da clínica, por isso a série de amanhã não parte mesmo que o programa local esteja a funcionar.
- **O terminal de pagamento depende de como está ligado.** Os que passam pela rede da clínica ficam mudos, os que têm cartão SIM próprio costumam continuar a cobrar. É uma pergunta de uma linha para quem lhe fornece o terminal, e faz-se antes.
- **A receita eletrónica e qualquer envio para sistemas externos param.** Fica tudo em espera, e isso inclui a comunicação de faturas.
- **A cópia de segurança externa não se faz nessa noite** se a linha ainda estiver em baixo ao fechar. Uma noite não é grave. Duas semanas sem ninguém ler os avisos de erro são.
- **O correio eletrónico e o telefone por IP também são internet.** Muitas clínicas descobrem nesse preciso momento que o seu único número passava pelo mesmo router.

## O SLA do fornecedor não é o SLA da sua linha

Uma disponibilidade de 99,9 % dá a ideia de que nunca acontece nada. São 43 minutos por mês e 8 horas e 46 minutos por ano. Os 99,5 % que também se publicam são cerca de três horas e meia por mês e quase 44 horas por ano.

De qualquer forma, esses números cobrem apenas o servidor do fornecedor. A sua ligação é um contrato à parte, e um acesso empresarial normal quase nunca traz qualquer compromisso de disponibilidade.

> **A maior parte das quedas de uma clínica pequena começa no passeio, não no centro de dados.** Uma obra, um armário de fibra aberto ou um router com sete anos não constam do SLA de ninguém, e são a causa habitual de uma manhã sem linha.

## O kit de avaria

Nada disto é caro e tudo tem de existir antes, porque a altura de ir procurar não é aquela em que estão quatro pessoas à espera na receção.

1. **Imprima a agenda do dia seguinte antes de fechar.** Uma folha: nome, hora, cadeira e tratamento previsto. É a peça que transforma uma avaria num incómodo em vez de num dia perdido.
2. **Tenha uma segunda via de dados já testada**, um router com cartão SIM ou a partilha de ligação de um telefone. Testada quer dizer que já alguém a ligou, não que existe numa gaveta.
3. **Ponha uma UPS no servidor e também no router**, porque um servidor vivo atrás de um router morto não serve de nada.
4. **Tenha consentimentos e folhas de evolução já impressos**, os cinco ou seis que usa mesmo.
5. **Guarde a lista de contactos do dia fora do sistema**, é isso que lhe permite avisar quem vem às 17 horas.
6. **Escreva quem faz o quê**: quem liga ao operador, quem avisa os pacientes, quem fica responsável por apontar o que acontece.

![Agenda em vista de dia com as consultas distribuídas pelas faixas horárias](/screenshots/schedule-day.png)

*É isto que tem de sair em papel na véspera à noite, não na manhã em que faz falta.*

## O que apontar enquanto dura

Trabalhar sem ligação não é o problema. O problema é voltar e não saber o que aconteceu entre as nove e a uma.

- **Quem veio e quem não veio**, com a hora real, para que as faltas fiquem registadas onde devem ficar.
- **O que se fez a cada paciente**, com o detalhe que poria no histórico clínico, não um resumo de três palavras.
- **Os lotes e referências de implantes e material** que o programa costuma preencher sozinho. É o que mais se perde e o mais difícil de reconstruir depois.
- **Todos os pagamentos recebidos**, valor, forma de pagamento e a que tratamento correspondem.
- **Os dados completos dos pacientes novos**, porque uma ficha escrita de memória três horas depois é uma ficha com erros.
- **Quem telefonou e para quê**, incluindo os cancelamentos, que são os que desarrumam a agenda do dia seguinte.

> **O que não se aponta durante a queda não se recupera depois.** O programa volta com tudo o que tinha às nove, e o que aconteceu entretanto só existe no papel que alguém preencheu.

## Acertar o dia quando a linha volta

A ordem interessa, porque há passos que dependem de outros e porque a tentação é começar pelo fácil.

1. **Confirme primeiro que a cópia de segurança da noite correu**, e lance uma agora se não correu.
2. **Crie as fichas dos pacientes novos antes de tudo o resto**, porque tudo o resto depende delas.
3. **Passe as notas clínicas do papel**, paciente a paciente, no próprio dia. No dia seguinte já ninguém se lembra do que queria dizer uma abreviatura.
4. **Registe os pagamentos** e confronte-os com o terminal e com a caixa.
5. **Corrija a agenda**: faltas, cancelamentos recebidos por telefone e o que passou para outro dia.
6. **Veja que lembretes não saíram** e decida quais ainda fazem sentido. Um lembrete de uma consulta que já passou faz mais mal do que lembrete nenhum.
7. **Guarde o papel até confirmar que está tudo lançado**, e destrua-o depois como o resto da documentação clínica.

## O que o RGPD espera que tenha pensado

A disponibilidade não é um extra da segurança, é uma das três propriedades que o regulamento nomeia. O artigo 32.º, n.º 1, inclui entre as medidas técnicas e organizativas adequadas:

> **b) A capacidade de assegurar a confidencialidade, integridade, disponibilidade e resiliência permanentes dos sistemas e dos serviços de tratamento; c) A capacidade de restabelecer a disponibilidade e o acesso aos dados pessoais de forma atempada no caso de um incidente físico ou técnico.**

Uma queda de linha de duas horas não é por si só uma violação a notificar. O que cabe mesmo nesse artigo é não conseguir aceder ao histórico de um paciente que está sentado na cadeira, ou perder o trabalho de uma manhã porque ninguém tinha pensado no papel.

Isto não é aconselhamento jurídico. Para o seu caso concreto, o encarregado de proteção de dados ou o seu advogado são quem deve responder.

## Cinco perguntas ao fornecedor antes de precisar das respostas

- **Que partes exatas do produto continuam a funcionar se a clínica ficar sem linha?** Uma lista é uma boa resposta. "Está tudo na cloud, não se preocupe" não é.
- **Onde está fisicamente a base de dados** e o que seria preciso para lhe chegar sem vocês.
- **Publicam um SLA, com que percentagem e o que compensa** quando não é cumprido.
- **O que acontece aos lembretes que não saíram?** São tentados de novo, perdem-se, ou acumulam-se e saem todos de uma vez.
- **Consigo exportar a agenda de amanhã em PDF ou CSV sozinho**, sem abrir um pedido de assistência.

As respostas a estas cinco dizem mais sobre um produto do que metade da sua página de funcionalidades.

O Dentalpin pode ser instalado numa máquina da clínica, o que faz de uma queda de linha uma avaria de comunicações e não uma avaria de histórico clínico: a agenda, o odontograma e as faturas continuam abertos na rede local enquanto lá fora não há nada acessível. As condições da versão alojada e da versão instalada por si estão em [preços](/pt/precos/), e se quiser ver como fica a instalação antes de decidir, [instalar leva três minutos](/pt/blog/instalar-dentalpin-em-tres-minutos/).

## Fontes

- Regulamento (UE) 2016/679 (RGPD), artigo 32.º, n.º 1, alíneas b) e c). [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consultado a 13 de setembro de 2026.
