# Movie API

Este projeto é uma API simples para gerenciar uma lista de filmes. Ele permite que você obtenha, adicione e curta filmes.

## Tecnologias Utilizadas

- Node.js
- Express
- CORS

## Configuração do Projeto

### Pré-requisitos

- Node.js (v12 ou superior)
- NPM (ou Yarn)

### Instalação

1. Clone o repositório
   bash
   git clone https://github.com/seu-usuario/movie-api.git
   cd movie-api
   

2. Instale as dependências
   bash
   npm install
   

3. Inicie o servidor
   bash
   npm start
   

O servidor estará rodando em `http://localhost:5000`.

## Endpoints

### GET /api/movies

Retorna a lista de todos os filmes.

### POST /api/movies

Adiciona um novo filme. O corpo da requisição deve ser um JSON com as seguintes propriedades:

json
{
    "title": "Título do Filme",
    "year": 2023,
    "img": "nome-da-imagem.jpg",
    "rating": 8.5,
    "description": "Descrição do filme."
}


### PUT /api/movies/:id/like

Incrementa o número de likes de um filme pelo seu ID. Retorna o filme atualizado.

## Contribuição

Sinta-se à vontade para abrir issues ou pull requests. 

## Licença

Este projeto está licenciado sob a MIT License.
