# Zenclient Aplicação Web 

Interface web da aplicação zenclient. Esse projeto faz parte do desafio bemol-digital.

> **Importante:** A aplicação web usa do serviço da API **zenclient-api** para que execute todas suas funcionalidades corretamente. Veja antes como executar a api: [repositório zenclient-api](https://github.com/Mathews-mw/bemol-digital-zenclient-api)

## Setup e execução através do Docker container

Para rodar o projeto em um container docker, será necessário antes montar a imagem do projeto.

1. Dentro da pasta raiz do projeto onde se encontra o arquivo *Dockerfile* e *docker-compose.yml*, rode o seguinte comando:

```bash
docker  compose  build
```

2. Com o container criado, basta iniciá-lo:

```bash
docker  compose  up  -d
```

3. Basta acessar agora o endereço [localhost:3000](http://localhost:3000/) para acessar a aplicação.

##  Sobre a aplicação

Essa aplicação é uma interface web que faz integração com a *zenclient-api*. Aqui é possível acessar a aplicação através de uma autenticação, cadastrar-se, ver os dados do usuário e editá-los. A aplicação foi desenvolvida em NextJS.

## Caractéristicas da aplicação

As principais caracterísitcas são:

- **NextJS** como Framework de desenvolvimento ;
- **Stitches** para estilização;

## Executando localmente

Em caso que você queira rodar a aplicação localmente como ambiente de desenvolvimento, basta seguir os passos:

1. Instalar as dependências do projeto:

```bash
npm install
```

2. Iniciár a plicação:

```bash
npm run dev
```

3. A aplicação estará rodando em [localhost:3000](http://localhost:3000/)