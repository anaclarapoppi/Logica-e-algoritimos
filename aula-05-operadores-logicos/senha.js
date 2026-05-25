// Instrução para poder rodar
// npm install prompt-sync

// Importar módulo
const prompt = require('prompt-sync')();

// Lógica
let nomeUsuario = prompt("Informe o nome do usuário: ");
let senha = prompt("Informe a senha: ");
console.log(""); // Linha em branco

//Referência
let loginBanco = "Poppi";
let senhaBanco = "123";

// Condicional SE + E
if (nomeUsuario === loginBanco && senha === senhaBanco) {
    console.log("Acesso autorizado!");
} else {
    console.log("Acesso negado!");
}