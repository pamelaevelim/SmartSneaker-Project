const SneakerEngine = {
    // Simulação de Banco de Dados Local
    db: {
        save(dados) {
            let historico = JSON.parse(localStorage.getItem('ss_history')) || [];
            historico.unshift(dados); // Novo dado no topo
            localStorage.setItem('ss_history', JSON.stringify(historico.slice(0, 5)));
        },
        load() {
            return JSON.parse(localStorage.getItem('ss_history')) || [];
        }
    },

    modularizar() {
        const peso = parseFloat(document.getElementById('peso').value);
        const nivel = document.getElementById('nivel').value;

        if (!peso) return alert("Insira o seu peso para o cálculo biomecânico.");

        // Lógica de Engenharia do Produto
        const config = {
            id: Date.now(),
            data: new Date().toLocaleDateString(),
            molas: peso > 90 ? "Titânio G5 (Alta Rigidez)" : "Pneumáticas Air-Flow",
            palmilha: nivel === "Pro" ? "Carbon Fiber Bio-Tech" : "Gel Confort Ergonômico",
            pesoInput: peso,
            nivelInput: nivel
        };

        this.exibirResultado(config);
        this.db.save(config);
        this.renderHistorico();
    },

    exibirResultado(c) {
        document.getElementById('overlay-result').classList.remove('hidden');
        document.getElementById('txt-molas').innerHTML = `⚙️ <b>Molas:</b> ${c.molas}`;
        document.getElementById('txt-palmilha').innerHTML = `👣 <b>Palmilha:</b> ${c.palmilha}`;
    },

    renderHistorico() {
        const container = document.getElementById('lista-historico');
        const dados = this.db.load();
        
        container.innerHTML = dados.map(item => `
            <div class="log-entry">
                <small>${item.data}</small> - ${item.pesoInput}kg (${item.nivelInput})
            </div>
        `).join('');
    }
};

// Inicialização ao carregar a página
document.addEventListener('DOMContentLoaded', () => SneakerEngine.renderHistorico());
