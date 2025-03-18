// importando os módulos necessários
const axios = require("axios");
const dotenv = require("dotenv");
const express = require("express");
const tabelaSimbolos = require("./simbolos.js");
// importando o módulo dotenv
dotenv.config();
// criando a instância do express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//definindo as variáveis de ambiente
const API_KEY = process.env.API_KEY;
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;
// definindo a rota principal
app.post("/", async (req, res) => {
    const { de, para, valor } = req.body; // obtendo os parâmetros da requisição
    const simboloPara = tabelaSimbolos[para.toUpperCase()];// obtendo o símbolo da moeda de destino
    const simboloDe = tabelaSimbolos[de.toUpperCase()]; // obtendo o símbolo da moeda de origem
    // verificando se os parâmetros foram informados

    if (!de || !para || !valor) {
        return res.status(400).json({
            error: "Parâmetros inválidos",
            message: "Informe os campos 'de', 'para' e 'valor' no corpo da requisição."
        });
    }
    // pegando as taxas de câmbio
    try {
        const response = await axios.get(`${BASE_URL}${de.toUpperCase()}`);
        const taxa = response.data.conversion_rates[para.toUpperCase()];
        // verificando se a moeda foi encontrada
        if (!taxa) {
            return res.status(400).json({
                error: "Moeda não encontrada",
                message: `Moeda "${para}" não encontrada!`
            });
        }
        // realizando a conversão
        const resultado = (parseFloat(valor) * taxa).toFixed(2);
        // retornando o resultado
        return res.status(200).json({
            valorOriginal: valor,
            valorConvertido: parseFloat(resultado),
            taxaDeCambio: taxa,
            simboloOriginal: simboloDe,
            moedaOriginal: de.toUpperCase(),
            simboloConvertido: simboloPara,
            moedaConvertida: para.toUpperCase(),
            message: `${simboloDe}${valor} ${de.toUpperCase()} equivale(m) a ${simboloPara}${resultado} ${para.toUpperCase()}`
        });
        // tratando os erros
    } catch (error) {
        return res.status(500).json({
            error: "Erro ao obter taxas de câmbio",
            message: "Erro ao obter taxas de câmbio. Verifique a chave da API!"
        });
    }
});
// iniciando o servidor
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!");
});
