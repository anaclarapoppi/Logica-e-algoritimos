// Não esquecer de instalar (Para poder simular):
// npm install prompt-sync

const prompt = require('prompt-sync')();

// Desenvolver a codificação do 1º desafio à partir deste ponto

let nomes = [];
let idades = [];

for (let i = 0; i < 3; i++) {
    nomes[i] = prompt(`Digite o nome da pessoa ${i + 1}:`);
    idades[i] = Number(prompt(`Digite a idade da pessoa ${i + 1}:`));
}

let resposta;

do {
    resposta = prompt("Deseja visualizar os dados? (sim/não)")
        .toLowerCase();

    if (resposta !== "sim" && resposta !== "não" && resposta !== "nao") {
        alert("Resposta inválida! Tente novamente!");
    }

} while (
    resposta !== "sim" &&
    resposta !== "não" &&
    resposta !== "nao"
);

if (resposta === "sim") {

    for (let i = 0; i < 3; i++) {

        let classificacao;

        if (idades[i] < 18) {
            classificacao = "Menor de idade";
        } else if (idades[i] < 60) {
            classificacao = "Maior de idade";
        } else {
            classificacao = "Idoso(a)";
        }

        console.log(`--- Pessoa ${i + 1} ---`);
        console.log(`Nome: ${nomes[i]}`);
        console.log(`Idade: ${idades[i]} anos`);
        console.log(`Classificação: ${classificacao}`);
        console.log("");
    }

} else {
    console.log("Programa finalizado com sucesso!");
}
