# Previsor de Jogos de Futebol

Este aplicativo prevê as probabilidades de resultados de jogos de futebol com base nos rankings dos times.

## Recursos
- Entrada de dados para ranking dos times.
- Exibição das probabilidades de vitória, derrota ou empate.
- Interface simples e responsiva.

## Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/rafaelge/football-predictor.git
   cd football-predictor
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure a URL da API:
   - Crie um arquivo `.env` na raiz e adicione a variável de ambiente:
     ```
     REACT_APP_API_URL=https://sua-api-de-previsao.com/predict
     ```

4. Inicie o servidor:
   ```bash
   npm start
   ```

## Tecnologias Utilizadas
- React
- API externa para previsões

## Licença
Este projeto está licenciado sob a licença MIT.
