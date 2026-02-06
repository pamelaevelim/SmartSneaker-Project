function comprar() {
    let peso = prompt("Para modular sua mola, informe seu peso (kg):");
    let nivel = prompt("Nível de corrida (Iniciante/Pro):");
    
    if (peso > 90) {
        alert("Configuração Recomendada: Molas de Titânio (Rigidez Alta) + Palmilha Ergonômica.");
    } else {
        alert("Configuração Recomendada: Molas Pneumáticas (Rigidez Média) + Palmilha de Conforto.");
    }
}
