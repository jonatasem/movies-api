const express = require('express');
const cors = require('cors');
const movies = require('./data/movies'); // Certifique-se de que este arquivo contém a lista de filmes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Permite requisições de diferentes domínios
app.use(express.json()); // Para interpretar JSON no corpo das requisições
app.use(express.static('public')); // Serve arquivos estáticos da pasta public

// Rota para obter a lista de filmes
app.get('/api/movies', (req, res) => {
    res.json(movies); // Retorna a lista de filmes em formato JSON
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});