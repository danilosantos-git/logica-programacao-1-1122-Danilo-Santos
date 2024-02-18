// Desafio 08
// Dado um array idades, encontre o índice de todos elementos que sejam maior ou 
// igual a 18.
// const idades = [15, 22, 17, 20, 30, 12];

// Array original
const idades = [15, 22, 17, 20, 30, 12];

// Identificando os índices dos valores menores que 18 e alocando em um novo array
const maioresDezoito = idades
    .map((idade, index) => ({ idade, index })) // Mapeia cada elemento com seu índice
    .filter(item => item.idade >= 18) // Filtra apenas os elementos com idade maior ou igual a 18
    .map(item => ({ index: item.index, idade: item.idade })); // Mapeia para obter os índices e idades

// Array original
console.log("Array original:");
console.log(idades);

// Retorna o array com o índice e o valor referente a cada um
console.log("\nÍndices e valores correspondentes aos maiores ou iguais a 18:");
console.log(maioresDezoito);