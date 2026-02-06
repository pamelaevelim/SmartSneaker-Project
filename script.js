function modularMolas() {
    const peso = parseFloat(document.getElementById('user-weight').value);
    const nivel = document.getElementById('run-level').value;
    const resultBox = document.getElementById('result-display');
    const configText = document.getElementById('config-text');

    // Validação básica
    if (isNaN(peso) || peso <= 0) {
        alert("Por favor, insira um peso válido.");
        return;
    }

    let recomendacao = "";

    // Lógica aprimorada com base no seu código original
    if (peso > 90) {
        recomendacao = `<strong>Configuração Recomendada:</strong><br> 
                        ⚙️ Molas de Titânio (Rigidez Alta)<br> 
                        👣 Palmilha Ergonômica Heavy Duty.`;
    } else {
        recomendacao = `<strong>Configuração Recomendada:</strong><br> 
                        ⚙️ Molas Pneumáticas (Rigidez Média)<br> 
                        👣 Palmilha de Conforto UltraSoft.`;
    }

    // Adicionando um detalhe extra para o nível "Pro"
    if (nivel === "pro") {
        recomendacao += "<br>🚀 <em>Modo de telemetria avançada ativado para atletas.</em>";
    }

    // Exibição visual
    configText.innerHTML = recomendacao;
    resultBox.classList.remove('hidden');
    resultBox.style.animation = "fadeIn 0.5s ease-in";
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
}
