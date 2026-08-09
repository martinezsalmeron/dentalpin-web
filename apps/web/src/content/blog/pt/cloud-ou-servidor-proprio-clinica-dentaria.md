---
title: "Cloud ou servidor próprio numa clínica dentária: como decidir"
description: "Cloud ou servidor na clínica: o que muda mesmo, o que a lei exige nos dois casos e as cinco perguntas que decidem a resposta para a sua clínica dentária."
pubDate: 2026-08-09
translationKey: nube-o-servidor-clinica-dental
tags: [cloud, servidor, infraestrutura, rgpd]
---

Esta decisão não se joga na segurança. Joga-se em quem responde quando alguma coisa falha e em quanto tempo a clínica demora a voltar a trabalhar. Escolha cloud se ninguém na clínica quer ser responsável por cópias de segurança e atualizações. Escolha servidor próprio se precisa de continuar a atender quando a ligação cai, ou se quer os dados fisicamente sob o seu controlo. Ambos são legais, e ambos lhe exigem exatamente a mesma papelada.

O que se segue é como chegar à sua resposta sem depender do que lhe diz um comercial.

## O que nenhuma das duas opções muda

O responsável pelo tratamento é a clínica, nos dois casos. Quem fornece o software ou o alojamento é subcontratante, e isso traz obrigações que não desaparecem por o servidor estar na sua receção.

O RGPD exige uma escolha fundamentada: o artigo 28.º, n.º 1 determina que o responsável "recorre apenas a subcontratantes que apresentem garantias suficientes de execução de medidas técnicas e organizativas adequadas". O n.º 3 do mesmo artigo obriga a que essa relação seja regida por contrato ou outro ato jurídico que vincule o subcontratante.

A segunda obrigação é a que mais clínicas falham sem saber. O artigo 32.º, n.º 1, alínea c) exige "a capacidade de restabelecer a disponibilidade e o acesso aos dados pessoais de forma atempada no caso de um incidente físico ou técnico".

> **Um servidor na sala de esterilização sem restauro testado falha esse teste tal como uma cloud sem cópias.** A norma não pergunta onde está o disco. Pergunta se consegue recuperar os dados, e em quanto tempo. Se ninguém alguma vez tentou um restauro, a resposta honesta é que não sabe.

Em Portugal existe ainda uma exigência específica sobre cópias de segurança. A Lei n.º 12/2005 determina, no artigo 4.º, n.º 6, que "a gestão dos sistemas de informação deve garantir o processamento regular e frequente de cópias de segurança da informação de saúde". O n.º 2 do mesmo artigo estende a proteção contra acessos indevidos "incluindo as respectivas cópias de segurança", ou seja, a cópia tem de estar tão protegida como o original.

![Agenda do dia no Dentalpin, com as consultas por gabinete e o respetivo estado](/screenshots/schedule-day.png)

*É isto que tem de abrir às nove da manhã, decida o que decidir.*

## São três opções, não duas

Quase todas as comparações opõem cloud a servidor próprio e deixam de fora a terceira, que é a escolhida por muitas clínicas com à-vontade técnico: a sua própria instalação, mas alojada num servidor alugado.

| | Cloud do fornecedor | Servidor na clínica | Instalação própria num VPS |
|---|---|---|---|
| Quem aplica as atualizações | ✓ O fornecedor | ✗ Alguém da clínica ou o seu informático | ~ Você, mas sem tocar em equipamento |
| Se a ligação cai | ✗ Não se consegue trabalhar | ✓ Continua a funcionar na rede local | ✗ Não se consegue trabalhar |
| Quem responde pela cópia de segurança | ~ O fornecedor faz, verificar é consigo | ✗ Inteiramente sua | ✗ Inteiramente sua |
| Equipamento a manter | ✓ Nenhum | ✗ Máquina, disco, UPS e a sua substituição | ✓ Nenhum |
| Custo inicial | ✓ Nenhum | ✗ Compra do equipamento | ~ Baixo |
| Onde estão os dados | Na infraestrutura do fornecedor | Nas suas instalações | No centro de dados que escolher |
| O que precisa para sair | Uma exportação completa que lhe têm de dar | ✓ Já os tem | ✓ Já os tem |

Os dois extremos desta tabela não competem no mesmo. A cloud tira-lhe trabalho e prende-o a um fornecedor. O servidor próprio dá-lhe controlo e dá a alguém um trabalho para fazer todos os meses.

## O teste que decide: o dia em que falha

Antes de comparar preços, ponha um número em duas coisas.

1. **Quanto tempo a clínica aguenta sem o software.** Se a resposta for "meia manhã, em papel", quase qualquer opção serve. Se for "uma hora", precisa de um plano escrito, e precisa dele também com servidor próprio.
2. **Quanto custa essa paragem.** Gabinetes vezes horas vezes faturação média. É o único número que transforma isto numa comparação económica em vez de uma questão de gosto.
3. **Quem atende o telefone às nove de uma segunda-feira.** Na cloud é o apoio do fornecedor e tem horário publicado. Com servidor próprio é o seu informático, e convém saber o tempo de resposta real antes de precisar dele.
4. **O que se perde entre a última cópia e a falha.** Uma cópia noturna significa perder um dia de trabalho. Se isso não é aceitável, a frequência da cópia passa a ser um requisito, não um pormenor.
5. **Como sai.** Peça por escrito o procedimento de exportação completa antes de assinar, não no dia em que quiser mudar.

> **A falha mais frequente não é a do fornecedor, é a da sua linha.** Um sistema em cloud para no router da clínica, não no centro de dados. Uma clínica com uma única fibra e sem alternativa em rede móvel tem um ponto único de falha, mesmo tendo escolhido o fornecedor mais sólido do mercado.

## O que a cloud não resolve, e o servidor próprio também não

Uma máquina debaixo do balcão da receção não é automaticamente mais privada. Com o sistema operativo por atualizar, o disco sem cifra e a cópia de segurança num disco USB guardado na mesma sala, vale menos do que uma cloud bem mantida: um assalto ou um incêndio leva o original e a cópia ao mesmo tempo.

Ao contrário também falha. A cloud não o dispensa de verificar nada: continua a precisar do contrato do artigo 28.º e continua a precisar de saber com que frequência os restauros são testados.

- **Cifra do disco**, nos dois modelos. É o que transforma um portátil ou um servidor roubado num problema de equipamento em vez de uma violação de dados.
- **Uma cópia fora do edifício**, sempre. A regra prática são três cópias, em dois suportes diferentes, uma delas fora da clínica.
- **Um restauro testado** pelo menos uma vez por ano, com o relógio na mão e o resultado registado.
- **Acessos por pessoa**, não uma senha partilhada num papel colado ao monitor, que é a falha que torna todo o resto irrelevante.

![Histórico clínico de um paciente no Dentalpin com odontograma, alertas clínicos e plano ativo](/screenshots/dental-chart.png)

*É isto que um restauro tem de devolver intacto, e não apenas a lista de pacientes.*

## Escolha a cloud se

- **Ninguém na clínica quer ser o responsável técnico.** É a boa razão, e chega por si só.
- **Trabalha em vários locais** e quer a mesma agenda em todos sem montar uma VPN.
- **A sua ligação é estável e tem alternativa** em dados móveis que já testou.
- **Prefere um custo mensal previsível** a uma compra de equipamento a cada cinco ou seis anos.

## Escolha servidor próprio se

- **Uma quebra de ligação não pode parar a consulta.** É o argumento mais forte e mais concreto deste lado.
- **Quer poder sair em qualquer dia** sem depender de alguém que lhe gere uma exportação.
- **Já tem informático** ou alguém que mantém os equipamentos com critério.
- **Interessa-lhe onde estão fisicamente os dados**, por política própria ou por exigência de um terceiro.

Se está indeciso, há uma saída intermédia honesta: comece pela opção que lhe der menos trabalho e guarde todos os meses uma exportação completa sua. Isso deixa-lhe a possibilidade de mudar de ideias mais tarde sem ter apostado nada irreversível.

No Dentalpin esta decisão não obriga a mudar de software: o mesmo produto corre na nossa cloud ou no seu próprio servidor com `docker compose`, sobre a mesma base de dados PostgreSQL e com a mesma exportação. Para experimentar a opção instalada por si antes de decidir, [a instalação demora três minutos](/pt/blog/instalar-dentalpin-em-tres-minutos/), e as condições das duas formas estão em [preços](/pt/precos/).

## Fontes

- Regulamento (UE) 2016/679 (RGPD), artigos 28.º e 32.º. [EUR-Lex](https://eur-lex.europa.eu/legal-content/PT/TXT/HTML/?uri=CELEX:32016R0679). Consultado a 9 de agosto de 2026.
- Lei n.º 12/2005, de 26 de janeiro, artigo 4.º. [Procuradoria-Geral Distrital de Lisboa](https://www.pgdlisboa.pt/leis/lei_mostra_articulado.php?nid=1660&tabela=leis&ficha=1&pagina=1). Consultado a 9 de agosto de 2026.

Isto não é aconselhamento jurídico. Os prazos de conservação e as obrigações concretas dependem do seu caso, e convém confirmá-los com o seu contabilista ou com a Ordem dos Médicos Dentistas.
