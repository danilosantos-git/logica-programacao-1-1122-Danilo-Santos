// Desafio 1
// - Verificação de Números Pares e Ímpares (If e Ternário)
// ● Escreva um programa que recebe um número como entrada e verifica 
// se é par ou ímpar. Imprima "É par" se for par e "É ímpar" se for 
// ímpar.

// Entrada do número pelo usuário
let entrada = prompt("Digite um número:");
let numero = parseInt(entrada);

// Verificar se o número é par ou ímpar (function)
function verificarParOuImpar(numero) {
    if (isNaN(numero)) {
        console.log("Por favor, insira um número válido.");
    } else {
        const parOuImpar = numero % 2 === 0 ? 'É par' : 'É ímpar';
        console.log(parOuImpar);
    }
}

// Retorna se é par ou ímpar
verificarParOuImpar(numero);