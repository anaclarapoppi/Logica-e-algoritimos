// Digite o número desejado direto aqui na variável para testar
let numeroMaximo = 5; 

let soma = 0;
let contador = 1;

// Estrutura Enquanto (While)
while (contador <= numeroMaximo) {
    soma = soma + contador; 
    contador++;             
}

// Exibe o resultado no terminal
console.log("A soma de todos os números de 1 até " + numeroMaximo + " é: " + soma);
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Digite um número inteiro positivo: ', (resposta) => {
    let numeroMaximo = parseInt(resposta);
    let soma = 0;
    let contador = 1;

    while (contador <= numeroMaximo) {
        soma = soma + contador;
        contador++;
    }

    console.log("A soma de todos os números de 1 até " + numeroMaximo + " é: " + soma);
    readline.close();
});
