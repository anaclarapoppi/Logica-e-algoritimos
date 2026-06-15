const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let somaNotas = 0;
let totalAlunos = 0;

console.log("--- Sistema de Notas (Digite -1 para encerrar) ---");

// Função que funciona como o nosso laço de repetição "Enquanto"
function perguntarNota() {
    readline.question("Digite a nota do aluno: ", (entrada) => {
        let nota = parseFloat(entrada);

        // ESTRUTURA ENQUANTO (Verifica se a nota é diferente de -1)
        if (nota !== -1) {
            somaNotas = somaNotas + nota; // Acumula a nota
            totalAlunos++;                // Conta o aluno
            perguntarNota();              // Repete (continua no laço)
        } else {
            // FIM ENQUANTO (Quando digita -1, entra aqui e finaliza)
            fecharEExibirResultado();
        }
    });
}

function fecharEExibirResultado() {
    console.log("\n--- Resultado Final ---");
    // Verifica se pelo menos uma nota foi digitada para evitar divisão por zero
    if (totalAlunos > 0) {
        let media = somaNotas / totalAlunos;
        console.log("Total de alunos: " + totalAlunos);
        console.log("Média da turma: " + media.toFixed(2));
    } else {
        console.log("Nenhuma nota válida foi digitada.");
    }
    readline.close(); // Encerra o programa com segurança
}

// Inicializa a primeira chamada do programa
perguntarNota();