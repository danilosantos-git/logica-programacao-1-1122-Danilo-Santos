// Desafio 2
// - Números Primos
// ● Crie um programa que peça ao usuário para inserir um número e
// use um loop while para verificar se o número é primo ou não. Um
// número primo é aquele que só é divisível por 1 e por ele mesmo.
// Imprima se o número é primo ou não.

// Entrada do número a ser verificado
const numero = parseInt(prompt("Digite um número:"));

// Inicializa a variável referente ao número primo
let ehPrimo = true;

// Loop onde busca negar a variável "ehPrimo"
if (numero <= 1) { // Não há número primo negativo, por isso a condição
    ehPrimo = false;
} else {
    let i = 2;
    while (i < numero) {
        if (numero % i === 0) {
            ehPrimo = false;
            break;
        }
        i++; // Incrementa o valor de "i" e retorna ao loop
    }
}

// Retorna se é primo ou não com base na verificação
if (ehPrimo) {
    console.log(`${numero} é um número primo.`);
} else {
    console.log(`${numero} não é um número primo.`);
}