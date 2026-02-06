const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Banco de dados em memória (Simulando um MongoDB/SQL)
let historicoGlobal = [];

// ROTA DE MODULARIZAÇÃO (O "Cérebro" do Back-end)
app.post('/api/modularizar', (req, res) => {
    const { peso, nivel } = req.body;

    if (!peso || !nivel) {
        return res.status(400).json({ error: "Dados insuficientes para modularização." });
    }

    // Lógica de Engenharia Industrial
    let configuracao = {
        id: Date.now(),
        molas: peso > 90 ? "Titânio G5 (Alta Rigidez)" : "Pneumáticas Air-Flow",
        palmilha: nivel === "Pro" ? "Carbon Fiber Bio-Tech" : "Gel Confort Ergonômico",
        timestamp: new Date().toISOString()
    };

    // Salva no "Banco de Dados" do servidor
    historicoGlobal.unshift(configuracao);
    
    // Retorna a resposta para o Front-end
    res.json(configuracao);
});

// ROTA PARA BUSCAR O HISTÓRICO
app.get('/api/historico', (req, res) => {
    res.json(historicoGlobal.slice(0, 10));
});

app.listen(PORT, () => {
    console.log(`🚀 SmartSneaker Back-end rodando em http://localhost:${PORT}`);
});
