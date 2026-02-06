import pandas as pd

# Simulação de dados de usuários escaneados
dados_clientes = {
    'cliente_id': [1, 2, 3],
    'tipo_pisada': ['Pronada', 'Supinada', 'Neutra'],
    'peso_kg': [85, 62, 74],
    'mola_indicada': ['Titanium_X', 'Carbon_Soft', 'Carbon_Mid']
}

df = pd.DataFrame(dados_clientes)

def otimizar_estoque(dataframe):
    # Lógica para prever qual mola fabricar mais
    print("Relatório de Otimização Industrial:")
    print(dataframe['mola_indicada'].value_counts())

otimizar_estoque(df)