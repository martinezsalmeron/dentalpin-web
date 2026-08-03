---
title: "Installer Dentalpin sur votre serveur en trois minutes"
description: "Jusqu'à cette semaine, installer Dentalpin voulait dire cloner le dépôt et compiler deux images. C'est fini. Maintenant c'est trois fichiers, trois valeurs et une commande."
pubDate: 2026-07-28
translationKey: instalar-dentalpin-en-tres-minutos
tags: [auto-hebergement, docker, installation]
---

Jusqu'à cette semaine, installer Dentalpin voulait dire cloner le dépôt et compiler les deux images sur votre propre serveur. Notre propre documentation annonçait une demi-heure, et elle était optimiste : compiler le frontend avec Nuxt réclame 4 Go de mémoire et punit tout VPS modeste.

C'est fini. Les images sont publiées à chaque release et votre serveur n'a plus qu'à les télécharger.

| | Avant | Maintenant |
|---|---|---|
| Étapes | Cloner le dépôt, compiler 2 images | ✓ Télécharger 3 fichiers |
| Temps | ~ 30 minutes | ✓ 3 minutes |
| Mémoire nécessaire | ✗ 4 Go pour compiler Nuxt | ✓ Celle que demande l'exécution |
| Certificat TLS | ✗ À vous de le monter | ✓ Automatique au démarrage |
| CORS | ✗ Configuration manuelle | ✓ N'existe plus, origine unique |

## Les trois minutes

```bash
curl -O https://raw.githubusercontent.com/martinezsalmeron/dentalpin/main/docker-compose.prod.yml
curl -O https://raw.githubusercontent.com/martinezsalmeron/dentalpin/main/Caddyfile
curl -o .env https://raw.githubusercontent.com/martinezsalmeron/dentalpin/main/.env.prod.example

# éditez .env : PUBLIC_URL, POSTGRES_PASSWORD, SECRET_KEY
docker compose -f docker-compose.prod.yml up -d
```

Pointez un domaine vers la machine, mettez `PUBLIC_URL=https://votre-domaine` et le certificat s'émet tout seul au premier démarrage. Rien à renouveler, aucun nginx à configurer.

> **Vous voulez juste regarder avant de décider ?** Mettez `SEED_ON_STARTUP=1` et vous démarrerez avec un cabinet de démonstration : patients, agenda, devis et factures pour essayer. Pour un vrai cabinet, laissez `0`.

![Écran d'accueil de Dentalpin avec le cabinet de démonstration : rendez-vous du jour, qui est au cabinet, paiements en retard et patients récents](/screenshots/home.png)

*Voilà ce que vous voyez en entrant avec `SEED_ON_STARTUP=1`, sans avoir créé un seul patient.*

## Pourquoi Caddy devant

Les deux versions précédentes exposaient le backend et le frontend sur des ports différents, et celui qui installait devait résoudre seul le proxy inverse, le TLS et la liste des origines autorisées pour CORS. Trois occasions de se tromper avant de voir le premier écran.

Maintenant, un conteneur Caddy sert tout depuis une seule origine : `/api/*` va au backend, le reste à l'interface. Le navigateur ne parle jamais à deux endroits, donc **CORS cesse d'être un problème**. Et Caddy demande le certificat à Let's Encrypt sans que personne ait à y penser.

![Schéma de l'installation : le navigateur atteint Caddy en HTTPS, Caddy route /api/* vers le backend et le reste vers le frontend Nuxt, et le backend parle à PostgreSQL](/diagrams/install-stack.svg)

*Quatre conteneurs et un seul port ouvert. La seule chose exposée sur internet, c'est Caddy.*

## Une image pour toutes les installations

C'est le détail dont nous sommes les plus contents, parce qu'il n'a pas coûté une ligne de code.

L'image du frontend est compilée avec une URL d'API par défaut. Normalement, cela obligerait à compiler une image par déploiement, exactement ce que nous voulions éviter. Ce n'est pas nécessaire : Nuxt lit cette URL via `runtimeConfig`, donc la variable `NUXT_PUBLIC_API_BASE_URL` l'écrase au démarrage du conteneur. Ce qui a été compilé n'est que la valeur par défaut.

Une image, n'importe quel domaine. Nous le vérifions avant chaque publication : le payload servi par l'application porte l'URL de votre installation, pas celle de la compilation.

## Mettre à jour

```bash
# dans .env
DENTALPIN_VERSION=2.1.0

docker compose -f docker-compose.prod.yml pull
docker compose -f docker-compose.prod.yml up -d
```

Les migrations s'appliquent toutes seules avant que l'API n'accepte des requêtes.

> **Fixez la version au lieu de laisser `latest`.** Comme ça, une mise à jour ne vous tombe jamais dessus par surprise le jour où vous redémarrez pour une autre raison. Et **faites une sauvegarde avant** : [on explique comment ici](https://github.com/martinezsalmeron/dentalpin/discussions/112). Ce sont deux volumes Docker, un avec la base de données et un avec les fichiers téléversés. Les deux, pas seulement le premier.

## Une leçon de la première heure

La première version de ces images est sortie uniquement pour `amd64`. Le raisonnement semblait sensé : tout VPS que vous louez aujourd'hui est en x86, et construire aussi pour ARM coûte du temps d'intégration continue.

Ça a tenu vingt minutes. Le temps qu'il nous a fallu pour suivre nos propres instructions depuis un Mac Apple Silicon :

```
no matching manifest for linux/arm64/v8 in the manifest list entries
```

La première commande de l'installation. Exactement ce que ce travail était censé régler.

> L'erreur n'était pas technique mais de jugement : nous avons pensé au serveur de production et **oublié que presque tout le monde essaie d'abord sur son portable**. Sans compter que les instances ARM de Hetzner sont les moins chères d'Europe, et visent précisément ce public.

Désormais chaque architecture est construite sur sa propre machine et un seul manifeste est publié par image. S'il en manque une des deux, la release ne sort pas.

Vous avez installé Dentalpin et quelque chose ne s'est pas passé comme raconté ici ? Dites-le dans les [Discussions](https://github.com/martinezsalmeron/dentalpin/discussions). Que l'installation marche du premier coup est, en ce moment, ce qui compte le plus pour nous.
