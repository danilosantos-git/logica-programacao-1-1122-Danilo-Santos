// Desafio 4
// Escolha um número e imprima sua tabuada de 1 a 10 utilizando um loop 
// for. 
// Saída: N X 1 = 10 

// Solicita ao usuário que escolha um número
const numeroEscolhido = parseInt(prompt("Escolha um número para ver sua tabuada:"));

// Verifica se o número escolhido é válido
if (!isNaN(numeroEscolhido)) {
    // Utiliza um loop for para imprimir a tabuada de 1 a 10
    for (let i = 1; i <= 10; i++) {
        // O valor do resultado vai sendo incrementado a partir da multiplicação dos valores fornecidos
        const resultado = numeroEscolhido * i;
        // Imprime o resultado de todas as operações do loop
        console.log(`${numeroEscolhido} X ${i} = ${resultado}`);
    }
} else {
    console.log("Por favor, insira um número válido.");
}