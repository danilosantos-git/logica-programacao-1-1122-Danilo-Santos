// Desafio 1
// Idade e nacionalidade para poder votar no Brasil
let idade = parseInt(prompt("Informe sua idade:"));
let nacionalidade = prompt("Informe sua nacionalidade:");

// Verifica se pode votar
let podeVotar = idade >= 16 && nacionalidade.toLowerCase() === "brasileira";

// Mostra o resultado
alert(podeVotar);