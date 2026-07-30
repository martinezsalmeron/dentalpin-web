---
title: "Prontuário eletrônico odontológico: o que a lei brasileira exige"
description: "O que a lei exige do prontuário eletrônico na odontologia: prazo de guarda, certificação NGS2, assinatura com certificado ICP-Brasil e o que a LGPD mudou."
pubDate: 2026-07-30
tags: [prontuario-eletronico, lgpd, odontologia]
---

Você pode abandonar o papel, mas não com qualquer sistema. Para o prontuário existir apenas em meio eletrônico, a Resolução CFO-91/2009 exige um sistema que cumpra integralmente o Nível de Garantia de Segurança 2 (NGS2) e assinatura com certificado digital padrão ICP-Brasil. Com um sistema de nível NGS1, o papel continua obrigatório. E o prazo mínimo de guarda hoje é de 20 anos a partir do último registro, pela Lei 13.787/2018.

O resto deste guia é o que cada uma dessas três peças exige na prática, e onde os textos discordam entre si.

## O que a Lei 13.787/2018 permite

A lei trata da digitalização e do uso de sistemas informatizados para guarda, armazenamento e manuseio de prontuário de paciente. A parte que interessa a quem digitaliza: o documento digitalizado conforme as normas da lei tem o mesmo valor probatório do original para todos os fins de direito.

O art. 6º é o que fixa o prazo. Decorrido o prazo mínimo de 20 anos a partir do último registro, os prontuários em papel e os digitalizados podem ser eliminados. Como alternativa à eliminação, o prontuário pode ser devolvido ao paciente, e o processo de eliminação tem que resguardar a intimidade do paciente e o sigilo das informações.

## NGS2 é o que decide se o papel pode ir embora

A Resolução CFO-91/2009 autoriza o uso de sistemas informatizados para guarda e manuseio do prontuário, eliminando a exigência do papel, desde que o sistema atenda integralmente aos requisitos do NGS2 do Manual de Certificação para Sistemas de Registro Eletrônico em Saúde, mantido pela SBIS em convênio com o CFM.

Os três artigos que decidem isso na prática:

- **Art. 3º**: autoriza o sistema informatizado e a dispensa do papel, condicionada ao cumprimento integral do NGS2.
- **Art. 4º**: com um sistema apenas de nível NGS1, o papel não pode ser eliminado, por falta de amparo legal.
- **Art. 5º**: o NGS2 exige o uso de assinatura digital, e ficam autorizados os certificados digitais padrão ICP-Brasil.

> **Sistema em nuvem não é o mesmo que sistema certificado.** A certificação é do produto, concedida após ensaios, e o fornecedor sabe o número dela. Se a resposta for "somos totalmente adequados à legislação" em vez de um número e uma data, você ainda não tem a resposta.

![Aba de informações do paciente com dados pessoais, contato de emergência, histórico médico e alergias](/screenshots/patients.png)

*O prontuário começa aqui, e é isso que precisa continuar legível daqui a vinte anos, independente de quem for o fornecedor.*

## Quanto tempo guardar: 10, 20 ou para sempre

As duas normas foram escritas em momentos diferentes e não dizem a mesma coisa. Vale conhecer as três linhas antes de decidir a política de guarda da clínica:

| Situação | Prazo | Onde está |
|---|---|---|
| Papel não arquivado eletronicamente | 10 anos do último registro | Resolução CFO-91/2009, art. 8º |
| Arquivado em mídia óptica, microfilme ou digitalizado | Guarda permanente | Resolução CFO-91/2009, art. 7º |
| Papel e digitalizados, regra federal posterior | 20 anos do último registro, e então podem ser eliminados | Lei 13.787/2018, art. 6º |

A resolução do CFO é de 2009 e a lei é de 2018. Na prática, quem trata os 20 anos como piso e a guarda eletrônica como permanente não fica exposto a nenhuma das duas leituras, e é a política mais simples de explicar a um fiscal ou a um advogado.

## O que a LGPD acrescenta

Dado referente à saúde é dado pessoal sensível pelo art. 5º, II da LGPD, e o art. 11 restringe seu tratamento às hipóteses que lista, começando pelo consentimento específico e destacado para uma finalidade determinada.

Um trecho do art. 11 costuma passar batido e é o mais relevante para quem escolhe software: é vedado o uso compartilhado entre controladores de dados sensíveis referentes à saúde com o objetivo de obter vantagem econômica, salvo nas hipóteses relativas à prestação de serviços de saúde, assistência farmacêutica e assistência à saúde.

> **A responsabilidade pelo prontuário não terceiriza.** Quem contrata o sistema segue respondendo pela guarda e pelo sigilo, e o fornecedor entra como operador. É por isso que "onde ficam os dados" e "o que acontece se eu sair" são perguntas do prontuário, não perguntas de TI.

## Teleodontologia também gera prontuário

A resolução que hoje regula a teleodontologia é a CFO-SEC-278, de 25 de novembro de 2025, que substituiu as normas de 2020 e está alinhada à Lei 14.510/2022 e à LGPD. Ela detalha as modalidades de atendimento remoto (teleconsulta, teletriagem, telediagnóstico, telemonitoramento, teleinterconsulta e teleorientação), e o registro em prontuário vale para o atendimento remoto como para qualquer outro.

![Atividade do paciente: consulta agendada, plano de tratamento criado, consulta concluída e tratamento realizado, cada linha com data e hora](/screenshots/patient-timeline.png)

*Cada lançamento com data e autoria. É o que sustenta o prontuário como prova, e o que um atendimento remoto também precisa deixar registrado.*

## Cinco perguntas antes de assinar com um fornecedor

1. **Qual o número da certificação NGS2 do sistema e de quando é?** Sem certificação, o papel continua obrigatório na sua clínica, por melhor que seja o software.
2. **A assinatura usa certificado ICP-Brasil do profissional?** É o que o art. 5º da CFO-91 autoriza, e é diferente de "login e senha com trilha de auditoria".
3. **Como o sistema exporta o prontuário completo, com datas e autoria?** Guarda por 20 anos significa poder ler os registros depois de trocar de fornecedor.
4. **Onde os dados ficam e quem mais tem acesso?** A pergunta existe por causa do art. 11 da LGPD, não por preferência técnica.
5. **O que acontece com o prontuário se você encerrar o contrato?** Quem responde pela guarda continua sendo você.

O Dentalpin registra prontuário, odontograma e plano de tratamento com data e autoria em cada lançamento, é código aberto (você audita o que quiser) e roda no seu próprio servidor, o que responde às perguntas 3, 4 e 5 de forma verificável. Sobre a 1 e a 2, a resposta honesta hoje é não: **o Dentalpin não tem certificação NGS2 nem assinatura com certificado ICP-Brasil**, então uma clínica no Brasil que use o Dentalpin hoje precisa manter o prontuário em papel para cumprir a CFO-91/2009. É o próximo item da nossa lista para o mercado brasileiro, e enquanto não estiver pronto está dito aqui em vez de escondido. Se quiser ver o resto do produto, [instalar em três minutos](/pt-br/blog/instalar-dentalpin-em-tres-minutos/) e a [página de preços](/pt-br/precos/) contam o que existe.

## Fontes

Tudo abaixo foi consultado em 30 de julho de 2026.

- [Lei nº 13.787, de 27 de dezembro de 2018](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13787.htm), digitalização e guarda de prontuário.
- [Resolução CFO-91/2009](https://transparencia.cfo.org.br/ato-normativo/?id=1360), no portal de transparência do Conselho Federal de Odontologia.
- [Manual de Certificação para Sistemas de Registro Eletrônico em Saúde, SBIS-CFM](https://www.sbis.org.br/certificacao/Manual_Certificacao_SBIS-CFM_2019_v4-3.pdf).
- [Lei nº 13.709/2018 (LGPD)](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm), arts. 5º, II e 11.
- [CFO regulamenta a Teleodontologia](https://website.cfo.org.br/cfo-regulamenta-a-teleodontologia-e-da-passo-fundamental-para-a-inclusao-de-consultas-odontologicas-no-programa-telessaude-do-sus/), sobre a Resolução CFO-SEC-278/2025.

Isto não é orientação jurídica. Prazos e exigências mudam, e a leitura que vale para a sua clínica é a do seu CRO e do seu advogado.
