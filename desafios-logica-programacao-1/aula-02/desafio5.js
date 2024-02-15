// Desafio 05 
// Dado um array numeros, crie um novo array que contenha apenas os números pares
// do array original.
// const numeros = [3, 8, 15, 21, 30, 37, 42];

// Array pré-definido
const numeros = [3, 8, 15, 21, 30, 37, 42];

// Função para filtrar apenas os números pares
function filtrarNumerosPares(array) {
    return array.filter(numero => numero % 2 === 0);
}

// Criar um novo array contendo apenas os números pares
const numerosPares = filtrarNumerosPares(numeros);

// Exibir o array original e os números pares
console.log("Array original: ", numeros);
console.log("Números pares do array original: ", numerosPares);