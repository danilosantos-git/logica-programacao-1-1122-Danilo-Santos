// Desafio 3
// - Determinação do Maior Número
// ● Escreva um programa que receba três números como entrada e
// determina o maior deles. Imprima o número mais alto.

// Recebe os valores a serem comparados
let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));
let numero3 = parseFloat(prompt("Digite o terceiro número:"));

// Exibe os valores de entrada
console.log("Valores digitados: " + numero1 + ", " + numero2 + ", " + numero3);

// Compara e define qual o maior entre as entradas, retornando o resultado
if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    alert('Erro! Por favor, digite apenas números!');
} else {
    const maiorNumero = Math.max(numero1, numero2, numero3);
    console.log("O maior número é: " + maiorNumero);
}