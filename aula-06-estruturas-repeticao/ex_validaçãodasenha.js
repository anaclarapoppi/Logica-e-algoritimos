const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function pedirSenha() {
    readline.question('Digite a senha: ', (senha) => {
        if (senha === "1234") {
            console.log("Acesso permitido!");
            readline.close(); // Encerra o programa
        } else {
            // Se errou, a função chama a si mesma para pedir de novo
            pedirSenha();
        }
    });
}

// Inicia o programa
pedirSenha();
