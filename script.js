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
}
