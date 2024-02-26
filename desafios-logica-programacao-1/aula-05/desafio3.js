// Desafio 3
// - Soma de Números Pares
// ● Desenvolva um programa que peça ao usuário para inserir números 
// inteiros. Use um loop while para calcular a soma dos números 
// pares inseridos pelo usuário. Pare a entrada quando o usuário 
// inserir 0 e exiba a soma total.

// Inicializa a variável que terá o resultado da soma dos pares
let somaPares = 0;

// Pede números ao usuário para realizar a soma
let numero = parseInt(prompt("Digite um número inteiro (ou 0 para sair):"));

// Loop para colher os números que serão somados
while (numero !== 0) {
    if (numero % 2 === 0) { // Condição para ser um número par
        somaPares += numero;
    }
    numero = parseInt(prompt("Digite um número inteiro (ou 0 para sair):"));
}

// Rertorna o resultado da soma
console.log(`A soma dos números pares inseridos é: ${somaPares}`);