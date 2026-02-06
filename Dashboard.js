const Dashboard = {
    isConnected: true,
    steps: 0,
    pressureData: [],
    cadenceData: [],
    pressureChart: null,
    cadenceChart: null,
    simulationInterval: null,

    init() {
        this.cacheElements();
        this.setupCharts();
        this.toggleConnection(true); // Conecta automaticamente ao carregar
    },

    cacheElements() {
        this.statusIndicator = document.querySelector('.status-indicator');
        this.connectionMessage = document.getElementById('connection-message');
        this.totalStepsDisplay = document.getElementById('total-steps');
        this.cadenceDisplay = document.getElementById('cadence');
        this.avgPressureDisplay = document.getElementById('avg-pressure');
    },

    setupCharts() {
        const pressureCtx = document.getElementById('pressureChart').getContext('2d');
        this.pressureChart = new Chart(pressureCtx, {
            type: 'line',
            data: {
                labels: [], // Horários
                datasets: [{
                    label: 'Pressão (kPa)',
                    data: [],
                    borderColor: '#00ff88',
                    backgroundColor: 'rgba(0, 255, 136, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { ticks: { color: 'white' }, grid: { color: '#333' } },
                    y: { beginAtZero: true, max: 100, ticks: { color: 'white' }, grid: { color: '#333' } }
                },
                plugins: { legend: { labels: { color: 'white' } } }
            }
        });

        const cadenceCtx = document.getElementById('cadenceChart').getContext('2d');
        this.cadenceChart = new Chart(cadenceCtx, {
            type: 'bar',
            data: {
                labels: [], // Horários
                datasets: [{
                    label: 'Cadência (spm)',
                    data: [],
                    backgroundColor: '#00ccff', // Azul para cadência
                    borderColor: '#00ccff',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { ticks: { color: 'white' }, grid: { color: '#333' } },
                    y: { beginAtZero: true, max: 200, ticks: { color: 'white' }, grid: { color: '#333' } }
                },
                plugins: { legend: { labels: { color: 'white' } } }
            }
        });
    },

    toggleConnection(forceConnect = false) {
        if (forceConnect) {
            this.isConnected = true;
        } else {
            this.isConnected = !this.isConnected;
        }
        
        if (this.isConnected) {
            this.statusIndicator.classList.replace('disconnected', 'connected');
            this.connectionMessage.innerText = "Sensor Ativo - Transmitindo Dados";
            this.simulationInterval = setInterval(() => this.simulateSensorData(), 1000);
        } else {
            this.statusIndicator.classList.replace('connected', 'disconnected');
            this.connectionMessage.innerText = "Desconectado - Dados Pausados";
            clearInterval(this.simulationInterval);
        }
    },

    simulateSensorData() {
        if (!this.isConnected) return;

        const now = new Date();
        const timeLabel = now.toLocaleTimeString();

        // Simulação de passos e cadência
        this.steps += Math.floor(Math.random() * 3) + 1; // 1 a 3 passos por segundo
        const currentCadence = Math.floor(Math.random() * (180 - 140 + 1)) + 140; // 140-180 spm
        
        // Simulação de pressão (0-100 kPa)
        const currentPressure = Math.floor(Math.random() * 80) + 10; // 10-90 kPa
        
        this.pressureData.push(currentPressure);
        this.cadenceData.push(currentCadence);

        // Limita os dados a um certo número de pontos no gráfico para não sobrecarregar
        if (this.pressureData.length > 20) {
            this.pressureData.shift();
            this.cadenceData.shift();
            this.pressureChart.data.labels.shift();
            this.cadenceChart.data.labels.shift();
        }

        this.pressureChart.data.labels.push(timeLabel);
        this.pressureChart.data.datasets[0].data.push(currentPressure);
        this.cadenceChart.data.labels.push(timeLabel);
        this.cadenceChart.data.datasets[0].data.push(currentCadence);
        
        this.pressureChart.update();
        this.cadenceChart.update();

        // Atualiza os displays de texto
        this.totalStepsDisplay.innerText = this.steps;
        this.cadenceDisplay.innerText = `${currentCadence} spm`;
        
        const sumPressure = this.pressureData.reduce((a, b) => a + b, 0);
        this.avgPressureDisplay.innerText = `${(sumPressure / this.pressureData.length).toFixed(1)} kPa`;
    }
};

document.addEventListener('DOMContentLoaded', () => Dashboard.init());
