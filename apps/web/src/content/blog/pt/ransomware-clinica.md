---
title: "Ransomware na clínica dentária: o plano da clínica pequena"
description: "O que fazer na primeira hora de um ataque de ransomware numa clínica dentária, que cópia de segurança sobrevive à cifra e o que o RGPD exige nas 72 horas seguintes."
pubDate: 2026-08-27
translationKey: ransomware-clinica-dental
tags: [ransomware, seguranca, rgpd, copias-de-seguranca, gestao]
---

O plano de uma clínica pequena contra o ransomware cabe numa folha: uma cópia de segurança desligada da rede que já tenha sido restaurada pelo menos uma vez, a lista de quem se contacta na primeira hora, sistemas atualizados com segundo fator em todos os acessos remotos, e a noção de que uma violação de dados dá início a um prazo de 72 horas. Nada disto se improvisa na manhã em que a agenda não abre.

O que se segue é essa folha, por ordem: o que para de facto, o que se faz nos primeiros sessenta minutos, o que a lei exige e que medidas mudam mesmo as probabilidades.

## O que para é a clínica, não o computador

O ransomware cifra dados e pede um resgate. Numa clínica dentária isso significa que a agenda do dia não abre, o histórico clínico desapareceu, as radiografias não aparecem e a faturação parou, tudo ao mesmo tempo e quase sempre logo pela manhã.

O problema clínico chega antes do problema informático. Sem os alertas médicos de um paciente não se sabe a que anestésico é alérgico, e é por isso que uma clínica sem acesso aos seus dados não pode continuar a atender como se nada fosse.

A ENISA, a agência europeia de cibersegurança, publicou em julho de 2023 a sua primeira análise de ameaças ao setor da saúde. O ransomware representa 54 % das ameaças do setor, os dados de pacientes são o alvo mais atacado com 30 %, e apenas 27 % das organizações inquiridas tinham um programa dedicado de defesa contra ransomware.

> **O número que justifica o esforço é quantos pacientes tem marcados para amanhã.** Uma clínica com três gabinetes e quarenta consultas por dia não está a discutir um assunto de informática, está a decidir se abre na próxima semana. Tudo o que vem a seguir é barato ao lado disso.

![Agenda da clínica em vista diária com as consultas distribuídas por gabinete](/screenshots/schedule-day.png)

*É esta a página que deixa de abrir, e é a primeira que alguém dá por falta.*

## A primeira hora, por ordem

A ordem interessa, porque as decisões dos primeiros minutos determinam se as provas se mantêm e se a cópia de segurança escapa.

1. **Desligue da rede o posto afetado**, cabo e Wi-Fi. Impede que a cifra avance para o servidor e para os restantes postos.
2. **Desligue também o disco ou o NAS das cópias.** Se estava ligado, é um alvo e não um refúgio.
3. **Não apague nada ainda.** Faça primeiro uma imagem do disco afetado: é ela que permite tentar decifrar mais tarde e é também a prova.
4. **Anote a hora em que deu por isso.** O prazo de notificação conta a partir do momento em que a clínica tem conhecimento da violação, por isso essa hora é um dado jurídico.
5. **Contacte.** O prestador de informática e o CERT.PT, do Centro Nacional de Cibersegurança, que é a equipa nacional de resposta a incidentes.
6. **Combine o que a receção diz.** Os pacientes que telefonam a confirmar a consulta vão perguntar, e uma frase combinada vale mais do que cinco respostas improvisadas.
7. **Apresente queixa.** O ataque é um crime, e a queixa passa a fazer parte do processo que terá de conseguir mostrar.

## As 72 horas que começam a contar

O artigo 33.º do RGPD obriga o responsável pelo tratamento a notificar a autoridade de controlo sem demora injustificada e, sempre que possível, no prazo de 72 horas após ter tido conhecimento da violação, exceto se for pouco provável que resulte num risco para os direitos e liberdades das pessoas.

A CNPD confirma-o na sua página sobre violações de dados: "A notificação deve ser feita no prazo de 72 horas após ter tido conhecimento". Acrescenta duas obrigações que se esquecem com facilidade: comunicar aos titulares dos dados "se reunidos os requisitos legais e nas condições descritas no artigo 34.º do RGPD", e "documentar quaisquer violações de dados, nos termos do n.º 5 do artigo 33.º do RGPD", mesmo quando a notificação não é exigível.

> **Documente a violação ainda que decida não a notificar.** Um registo curto com a data, o alcance e o raciocínio que sustenta a decisão de não notificar é exatamente o que uma inspeção pede para ver. A CNPD espera ainda que exista "uma política interna que lhe permita detetar e gerir incidentes de segurança".

| O que aconteceu | Notificar a CNPD? | Comunicar aos pacientes? |
|---|---|---|
| Só cifra, com restauro em horas a partir de cópia limpa | ~ Avaliar e documentar o raciocínio | ✗ Em regra não, sem risco elevado |
| Histórico clínico cifrado e sem cópia utilizável | ✓ Sim | ✓ Provavelmente sim |
| Os atacantes publicam ou ameaçam publicar os dados | ✓ Sim | ✓ Sim |
| Um portátil cifrado sem dados de pacientes | ✗ Não é violação de dados pessoais | ✗ Não |

Isto não é aconselhamento jurídico e cada caso avalia-se por si. A regra prática é a que as autoridades publicam: na dúvida, notifica-se.

## A cópia de segurança que sobrevive à cifra

O ransomware cifra tudo aquilo em que a máquina infetada consegue escrever. Isso inclui o disco USB ligado há dois anos e a pasta do NAS mapeada como unidade de rede.

O NCSC britânico é explícito: manter cópias offline, separadas e noutro local, de preferência fora do edifício; não deixar os suportes de cópia permanentemente ligados à rede, porque "os atacantes visam os dispositivos de cópia ligados"; testar com regularidade que o restauro funciona; e analisar as cópias antes de restaurar.

| Onde está a cópia | Sobrevive a um ransomware | Trabalho mensal |
|---|---|---|
| Uma pasta no mesmo servidor | ✗ É cifrada com o resto | ✓ Nenhum |
| Disco USB permanentemente ligado | ✗ É cifrada com o resto | ✓ Nenhum |
| Disco que se liga, copia e retira | ✓ Sim, se estava fora durante o ataque | ~ Alguém tem de se lembrar |
| Cópia na nuvem com versões ou imutabilidade | ✓ Sim, se o atacante não tiver essas credenciais | ✓ Nenhum, depois de automatizada |
| Pasta sincronizada (Drive, OneDrive, Dropbox) | ✗ Sincroniza por cima os dados já cifrados | ✓ Nenhum |

Depois vem o passo que transforma uma cópia num plano: restaurá-la uma vez por ano noutra máquina e cronometrar. Esse número é o tempo real de recuperação, e o artigo 32.º, n.º 1, alínea d), pede precisamente que se teste e avalie com regularidade a eficácia das medidas.

![Ficha do paciente no separador de atividade, com alertas clínicos, plano em curso e cronologia](/screenshots/patient-timeline.png)

*Os alertas médicos e o histórico de tratamentos são a parte que ninguém reconstrói de memória numa manhã.*

## O que baixa mesmo o risco

Nenhuma medida isolada evita um ransomware, mas algumas fecham os caminhos de entrada habituais numa clínica pequena.

- **Atualize assim que sai a correção**, com prioridade para tudo o que está exposto à internet: router, firewall, equipamento de VPN.
- **Segundo fator em todos os acessos remotos.** Se alguém trabalha a partir de casa, essa porta precisa de MFA, e ele não deve estar instalado no mesmo aparelho que administra as cópias.
- **Contas com as permissões estritamente necessárias.** A receção não precisa de ser administradora do servidor, e o ransomware herda exatamente os direitos de quem o abriu.
- **Macros desativadas** nos documentos de escritório, ainda hoje uma entrada comum por correio eletrónico.
- **Nenhuma palavra-passe partilhada.** Uma conta por pessoa não é burocracia, é a única coisa que permite perceber depois por onde entraram.
- **Ambiente de trabalho remoto fechado à internet.** Se o acesso externo é necessário, faz-se por VPN com MFA e não por uma porta aberta.

## Pagar, e porque a resposta oficial é não

O NCSC lembra que as autoridades "não incentivam, não apoiam nem aceitam o pagamento de resgates", e dá as razões: não há garantia de recuperar o acesso aos dados, o equipamento continua infetado, e o dinheiro vai para grupos criminosos.

> **Pagar não encerra o processo.** Mesmo que os dados voltem, a violação existiu, o prazo do artigo 33.º correu na mesma, e documentá-la e avaliar a comunicação aos pacientes continua a ser responsabilidade da clínica.

Antes de dar dados como perdidos, verifique o No More Ransom, o projeto apoiado pela Europol que publica ferramentas gratuitas de decifra para as famílias já quebradas. Não cobre tudo, e verificar leva cinco minutos.

## A folha para escrever hoje

Escreva-a, imprima-a e guarde uma cópia fora do sistema que seria preciso restaurar. Um plano que só existe dentro do servidor cifrado não é um plano.

1. **A quem se telefona**, com nomes e números: prestador de informática, responsável da clínica, CERT.PT, e a seguradora se tiver cobertura de risco cibernético.
2. **Onde estão as cópias**, com que credenciais se acede e quem as tem além do informático.
3. **Como se restaura**, passo a passo, escrito por quem já o fez pelo menos uma vez.
4. **O que a receção responde a quem telefona**, em duas frases combinadas.
5. **Quem decide sobre a notificação** à CNPD e com que apoio jurídico ou encarregado de proteção de dados.
6. **A data do último teste de restauro** e quanto tempo demorou.

Com isso, um ransomware deixa de ser uma crise sem fim à vista e passa a ser um dia muito mau com um desfecho conhecido.

No Dentalpin a cópia é uma exportação normal de PostgreSQL mais a pasta dos anexos, por isso pode enviá-la para um destino que o servidor da clínica não controla e restaurá-la sem depender de ninguém. As condições da versão alojada e da instalada em servidor próprio estão em [preços](/pt/precos/).

## Fontes

- Regulamento (UE) 2016/679 (RGPD), artigos 32.º, 33.º e 34.º. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consultado a 27 de agosto de 2026.
- CNPD, *Violação de dados ou data breach*. [cnpd.pt](https://www.cnpd.pt/organizacoes/outras-obrigacoes/violacao-de-dados-ou-data-breach/). Consultado a 27 de agosto de 2026.
- NCSC, *Mitigating malware and ransomware attacks*. [ncsc.gov.uk](https://www.ncsc.gov.uk/guidance/mitigating-malware-and-ransomware-attacks). Consultado a 27 de agosto de 2026.
- ENISA, *Health Threat Landscape* (5 de julho de 2023). [enisa.europa.eu](https://www.enisa.europa.eu/news/checking-up-on-health-ransomware-accounts-for-54-of-cybersecurity-threats). Consultado a 27 de agosto de 2026.
- No More Ransom, *About the project*. [nomoreransom.org](https://www.nomoreransom.org/en/about-the-project.html). Consultado a 27 de agosto de 2026.

Isto não é aconselhamento jurídico. A avaliação do risco de uma violação concreta e a decisão de a notificar dependem do caso, e devem ser confirmadas com apoio jurídico ou com o encarregado de proteção de dados.
