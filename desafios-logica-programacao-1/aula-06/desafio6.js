// Desafio 6
// Faça um mecanismo de busca dentro de um array usando for.
// [1,2,3,4,5,6,7,8,9,10]
// Achei o número 7

// Array base para busca
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Pede o número que será buscado
const numeroBuscado = parseInt(prompt("Digite um número para buscar no array:"));

// Inicializa a variável de busca
let encontrado = false;

// Loop que passa por todos os valores da array até encontrar ou não o número pedido
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numeroBuscado) {
        encontrado = true;
        break; // Interrompe o loop ao encontrar o número
    }
}

// Caso 'encontrado' passe a ser 'true', retorna que foi encontrado
if (encontrado) {
    console.log(`O número ${numeroBuscado} foi encontrado`);
} else {
    console.log(`O número ${numeroBuscado} não foi encontrado`);
}