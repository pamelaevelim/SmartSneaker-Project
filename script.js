function comprar() {
    let peso = prompt("..."); // Para a execução do navegador
    // ... lógica simples ...
    alert("..."); // Apenas exibe, não armazena
}
// Função para salvar o histórico de configurações do usuário
function salvarHistorico(peso, nivel, recomendacao) {
    // Busca o histórico existente ou cria um novo array
    let historico = JSON.parse(localStorage.getItem('sneaker_history')) || [];

    const novaPesquisa = {
        data: new Date().toLocaleString(),
        peso: peso,
        nivel: nivel,
        config: recomendacao
    };

    historico.push(novaPesquisa);
    
    // Salva de volta no "Banco de Dados" do navegador
    localStorage.setItem('sneaker_history', JSON.stringify(historico));
    exibirHistorico();
}

// Função para exibir o que o sistema "lembrou"
function exibirHistorico() {
    const logContainer = document.getElementById('user-log');
    let historico = JSON.parse(localStorage.getItem('sneaker_history')) || [];
    
    if (logContainer) {
        logContainer.innerHTML = historico.map(item => `
            <div class="log-item">
                <span>${item.data}:</span> Peso ${item.peso}kg - <strong>${item.nivel}</strong>
            </div>
        `).join('');
    }
}

// Atualizando sua função comprar para salvar os dados
function comprar() {
    let peso = prompt("Para modular sua mola, informe seu peso (kg):");
    let nivel = prompt("Nível de corrida (Iniciante/Pro):");
    let rec = "";
    
    if (peso > 90) {
        rec = "Molas de Titânio + Palmilha Ergonômica";
    } else {
        rec = "Molas Pneumáticas + Palmilha de Conforto";
    }

    alert(`Configuração Recomendada: ${rec}`);
    salvarHistorico(peso, nivel, rec);
}

// Carregar histórico ao abrir a página
document.addEventListener('DOMContentLoaded', exibirHistorico);
// Função para salvar o histórico de configurações do usuário
function salvarHistorico(peso, nivel, recomendacao) {
    // Busca o histórico existente ou cria um novo array
    let historico = JSON.parse(localStorage.getItem('sneaker_history')) || [];

    const novaPesquisa = {
        data: new Date().toLocaleString(),
        peso: peso,
        nivel: nivel,
        config: recomendacao
    };

    historico.push(novaPesquisa);
    
    // Salva de volta no "Banco de Dados" do navegador
    localStorage.setItem('sneaker_history', JSON.stringify(historico));
    exibirHistorico();
}

// Função para exibir o que o sistema "lembrou"
function exibirHistorico() {
    const logContainer = document.getElementById('user-log');
    let historico = JSON.parse(localStorage.getItem('sneaker_history')) || [];
    
    if (logContainer) {
        logContainer.innerHTML = historico.map(item => `
            <div class="log-item">
                <span>${item.data}:</span> Peso ${item.peso}kg - <strong>${item.nivel}</strong>
            </div>
        `).join('');
    }
}

// Atualizando sua função comprar para salvar os dados
function comprar() {
    let peso = prompt("Para modular sua mola, informe seu peso (kg):");
    let nivel = prompt("Nível de corrida (Iniciante/Pro):");
    let rec = "";
    
    if (peso > 90) {
        rec = "Molas de Titânio + Palmilha Ergonômica";
    } else {
        rec = "Molas Pneumáticas + Palmilha de Conforto";
    }

    alert(`Configuração Recomendada: ${rec}`);
    salvarHistorico(peso, nivel, rec);
}

// Carregar histórico ao abrir a página
document.addEventListener('DOMContentLoaded', exibirHistorico);
