// Desafio 09
// Dado um array notas, calcule a média aritmética das notas, mas ignore a nota 
// mais baixa e a nota mais alta do conjunto.
// const notas = [8, 9, 7, 5, 10, 6];

//Array base
const notas = [8, 9, 7, 5, 10, 6];

// Ordena as notas em ordem crescente
const notasOrdenadas = notas.slice().sort((a, b) => a - b);

// Remove a menor e a maior nota
const notasSemMaiorMenor = notasOrdenadas.slice(1, -1);

// Calcula a soma das notas restantes
const somaNotas = notasSemMaiorMenor.reduce((acc, nota) => acc + nota, 0);

// Calcula a média aritmética das notas restantes
const media = somaNotas / notasSemMaiorMenor.length;

// Retorna o resultado e os valores das notas usadas
console.log("Notas:");
console.log(notas);
console.log("\nNotas sem a menor e a maior:");
console.log(notasSemMaiorMenor);
console.log("\nMédia aritmética das notas sem a menor e a maior:");
console.log(media);