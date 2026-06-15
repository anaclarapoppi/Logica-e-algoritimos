// roda rpm install prompt-sync

// Importa o modúlo (Para rodar algoritimos no terminal)
const prompt = require('prompt-sync')()

// Titulo
console.log('--- Tabuada ---')
console.log("")

// Perguntar (Qual tabuada gerar)
let numero = Number (prompt('Digite um número para gerar a tabuada'))

// Laço para gerar a tabuada
for (let i = 1; i <= 10; i++){
    console.log(numero + "x" + i + "=" + (numero * i))
}