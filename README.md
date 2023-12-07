# IHeroes API v1.0.0

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/ritecsuy-ariel/iheroes-backend?color=%2304D361">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/ritecsuy-ariel/iheroes-backend/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/ritecsuy-ariel/iheroes-backend?style=social">
  </a>
</p>

Essa API corresponde ao teste técnico da ZRP para posição de desenvolvedor fullstack. 

# Features

- Autenticação e cadastro ✅

- CRUD de heróis ✅

- Alocação de heróis ❌

- Histórico de ameaças ❌

- Alocação de heróis inteligente ❌

# Tecnologias

- Node.js

# Get Started

Para iniciar o projeto em um ambiente localhost, é necessário um banco de dados do tipo postgres.

Por segurança, as configurações de variáveis de ambiente necessárias para executar o projeto não estão incluídas no git.

Obtenha as configurações de banco de dados necessárias antes de continuar o passo a passo.

## Passo 1 - Instalar as dependencias

Para instalar as dependencias utilizando o gerenciador de pacote npm, execute o comando:

```sh
    npm install
```

## Passo 2 - Executar as migrations 

Execute as migrations de banco de dados para construir as tabelas automáticamente, execute o comando:

```sh
    npx sequelize-cli db:migrate
```

## Passo 3 Executar as seeds

Execute as seeds do projeto para obter uma inserir diversos heróis no banco de dados, execute o comando

```sh
  npx sequelize-cli db:seed:all
```

## Passo 4 - Execute os testes

Execute os testes para garantir que a aplicação está funcionando corretamente, execute o comando:

```sh
    npm test
```

## Passo 5 -  Iniciar aplicação

O script dev inicia aplicação na porta 3333 em ambiente localhost, execute o comando:

```sh
    npm run dev
```

# Contributions

Colabore com o projeto através de [Pull requests](https://github.com/ritecsuy-ariel/iheroes-backend/pulls).

# Issues

Encontrou algum erro? Reporte em [Issues](https://github.com/ritecsuy-ariel/iheroes-backend/issues)