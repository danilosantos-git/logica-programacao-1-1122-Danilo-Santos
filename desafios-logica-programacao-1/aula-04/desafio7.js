// Desafio 7
// - Verificação de Números Pares e Ímpares
// ● Escreva um programa que recebe um número como entrada e verifica 
// se é par ou ímpar. Imprima "É par" se for par e "É ímpar" se for 
// ímpar. (Usar switch Case)

// Recebe o número como entrada
let numero = parseInt(prompt("Digite um número:"));

// Verifica se o número é par ou ímpar usando switch case (converte o número para o valor absoluto dele)
switch (Math.abs(numero) % 2) {
    case 0:
        console.log(`${numero} é par`);
        break;
    case 1:
        console.log(`${numero} é ímpar`);
        break;
    default:
        console.log("Número inválido");
}