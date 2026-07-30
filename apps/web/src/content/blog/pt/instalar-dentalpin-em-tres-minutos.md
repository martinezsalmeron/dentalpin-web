---
title: "Instalar o Dentalpin no seu servidor em três minutos"
description: "Até esta semana, instalar o Dentalpin significava clonar o repositório e compilar duas imagens. Já não. Agora são três ficheiros, três valores e um comando."
pubDate: 2026-07-28
tags: [servidor-proprio, docker, instalacao]
---

Até esta semana, instalar o Dentalpin significava clonar o repositório e compilar as duas imagens no seu próprio servidor. A nossa documentação apontava meia hora, e era otimista: compilar o frontend com Nuxt pede 4 GB de memória e castiga qualquer VPS modesto.

Isso acabou. As imagens são publicadas em cada versão e o seu servidor só tem de as descarregar.

| | Antes | Agora |
|---|---|---|
| Passos | Clonar o repositório, compilar 2 imagens | ✓ Descarregar 3 ficheiros |
| Tempo | ~ 30 minutos | ✓ 3 minutos |
| Memória necessária | ✗ 4 GB para compilar o Nuxt | ✓ A que a execução pedir |
| Certificado TLS | ✗ Monta-o você | ✓ Automático no arranque |
| CORS | ✗ Configuração manual | ✓ Deixa de existir, origem única |

## Os três minutos

```bash
curl -O https://raw.githubusercontent.com/martinezsalmeron/dentalpin/main/docker-compose.prod.yml
curl -O https://raw.githubusercontent.com/martinezsalmeron/dentalpin/main/Caddyfile
curl -o .env https://raw.githubusercontent.com/martinezsalmeron/dentalpin/main/.env.prod.example

# edite o .env: PUBLIC_URL, POSTGRES_PASSWORD, SECRET_KEY
docker compose -f docker-compose.prod.yml up -d
```

Aponte um domínio para a máquina, ponha `PUBLIC_URL=https://o-seu-dominio` e o certificado é emitido sozinho no primeiro arranque. Não há nada para renovar nem nenhum nginx para configurar.

> **Só quer ver antes de decidir?** Ponha `SEED_ON_STARTUP=1` e arranca com uma clínica de demonstração: pacientes, agenda, orçamentos e faturas com que possa mexer. Para uma clínica a sério, deixe a `0`.

![Página inicial do Dentalpin com a clínica de demonstração: consultas de hoje, quem está na clínica, pagamentos vencidos e pacientes recentes](/screenshots/home.png)

*É isto que aparece ao entrar com `SEED_ON_STARTUP=1`, sem ter criado um único paciente.*

## Porquê o Caddy à frente

As duas versões anteriores expunham o backend e o frontend em portas diferentes, e quem instalava tinha de resolver por sua conta o proxy inverso, o TLS e a lista de origens permitidas para CORS. Três oportunidades de errar antes de ver o primeiro ecrã.

Agora um contentor de Caddy serve tudo a partir de uma única origem: `/api/*` vai para o backend, o resto para a interface. O navegador nunca fala com dois sítios, por isso **o CORS deixa de existir como problema**. E o Caddy pede o certificado ao Let's Encrypt sem ninguém ter de se lembrar.

![Esquema da instalação: o navegador chega ao Caddy por HTTPS, o Caddy encaminha /api/* para o backend e o resto para o frontend Nuxt, e o backend fala com o PostgreSQL](/diagrams/install-stack.svg)

*Quatro contentores e uma única porta aberta. A única coisa exposta à internet é o Caddy.*

## Uma imagem para todas as instalações

É o detalhe de que estamos mais contentos, porque não custou uma linha de código nova.

A imagem do frontend é compilada com um endereço de API por omissão. Normalmente isso obrigaria a compilar uma imagem por instalação, que é justamente o que queríamos evitar. Não é preciso: o Nuxt lê esse endereço através do `runtimeConfig`, por isso a variável `NUXT_PUBLIC_API_BASE_URL` sobrepõe-se a ele no arranque do contentor. O que foi compilado é apenas o valor por omissão.

Uma imagem, qualquer domínio. Confirmamo-lo antes de publicar: o que a aplicação serve leva o endereço da sua instalação, não o que foi compilado.

## Atualizar

```bash
# no .env
DENTALPIN_VERSION=2.1.0

docker compose -f docker-compose.prod.yml pull
docker compose -f docker-compose.prod.yml up -d
```

As migrações são aplicadas sozinhas antes de a API aceitar pedidos.

> **Fixe a versão em vez de deixar `latest`.** Assim uma atualização nunca lhe chega de surpresa no dia em que reinicia por outro motivo. E **faça cópia de segurança antes**: [explicamos como aqui](https://github.com/martinezsalmeron/dentalpin/discussions/112). São dois volumes de Docker: um com a base de dados e outro com os documentos carregados. Os dois, não só o primeiro.

## Uma lição da primeira hora

A primeira versão destas imagens saiu só para `amd64`. O raciocínio parecia sensato: qualquer VPS que alugue hoje é x86, e construir também para ARM custa tempo de integração contínua.

Durou vinte minutos. O tempo que demorámos a seguir as nossas próprias instruções a partir de um Mac com Apple Silicon:

```
no matching manifest for linux/arm64/v8 in the manifest list entries
```

O primeiro comando da instalação. Exatamente aquilo que este trabalho existia para resolver.

> O erro não foi técnico, foi de critério: pensámos no servidor de produção e **esquecemos que quase toda a gente experimenta primeiro no portátil**. E as instâncias ARM da Hetzner são as mais baratas da Europa, dirigidas justamente a este público.

Agora cada arquitetura é construída na sua própria máquina e publica-se um único manifesto por imagem. Se faltar uma das duas, a versão não sai.

Instalou o Dentalpin e alguma coisa não correu como aqui se conta? Diga nas [Discussions](https://github.com/martinezsalmeron/dentalpin/discussions). Que a instalação funcione à primeira é, neste momento, o que mais nos importa.
