// Desafio 10
// Dado um array palavras, crie uma nova string que seja a concatenação de todas 
// as palavras do array, separadas por um espaço em branco.
// const palavras = ["Este", "é", "um", "exercício", "interessante"];

// Array base
const palavras = ["Este", "é", "um", "exercício", "interessante"];

// Concatenação das palavras do array
const novaString = palavras.join(" ");

// Retorna o array base e a concatenação das palavras
console.log("Array base:");
console.log(palavras);
console.log("\nFrase concatenada:");
console.log(novaString);