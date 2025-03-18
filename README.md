# Conversor de Moedas – API Node.js

Este é um projeto simples de uma API para conversão de moedas, utilizando **Node.js**, **Express** e **Axios**, e consumindo os dados da **ExchangeRate-API**.

## 🚀 Como funciona?

Essa API recebe um POST contendo a moeda de origem, a moeda de destino e o valor a ser convertido. Em seguida, ela consulta as taxas de câmbio e retorna o valor convertido.

## 📌 Tecnologias utilizadas

- Node.js
- Express
- Axios
- Dotenv

## 📦 Como instalar e rodar o projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd nome-do-projeto
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Crie um arquivo **.env** na raiz do projeto e adicione a sua chave da API:
   ```env
   API_KEY=SUA_CHAVE_DA_API
   ```
5. Inicie o servidor:
   ```bash
   npm start
   ```

## 📡 Como usar a API

### Endpoint:
```
POST /
```

### Corpo da requisição (**JSON**):
```json
{
  "de": "USD",
  "para": "BRL",
  "valor": 100
}
```

### Resposta esperada:
```json
{
  "valorOriginal": 100,
  "valorConvertido": 500.00,
  "taxaDeCambio": 5.00,
  "simboloOriginal": "$",
  "moedaOriginal": "USD",
  "simboloConvertido": "R$",
  "moedaConvertida": "BRL",
  "message": "$100 USD equivale(m) a R$500.00 BRL"
}
```

## 🛠 Possíveis erros e soluções

- **Erro 400: Parâmetros inválidos** → Verifique se enviou os campos `de`, `para` e `valor` corretamente.
- **Erro 400: Moeda não encontrada** → Confira se os códigos das moedas estão corretos.
- **Erro 500: Erro ao obter taxas de câmbio** → Pode ser um problema com a chave da API, verifique seu **.env**.

## 📜 Licença

Este projeto está sob a licença MIT - sinta-se livre para utilizá-lo e contribuir! 😃

---
Criado com ❤️ por [Felipe bertucci](https://github.com/bertuccii).

