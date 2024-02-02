// Desafio 01 - Verificar Elegibilidade para Voto
// Receba através do prompt:
// ● idade
// ● nacionalidade
// Então deve retornar true se a pessoa for elegível para votar, o que ocorre 
// quando a idade for maior ou igual a 16 e a nacionalidade for "brasileira", 
// caso contrário, retorna false.

// Entrada dos dados e conversão
let idade = parseInt(prompt("Informe sua idade:"));
let nacionalidade = prompt("Informe sua nacionalidade:");

// Verifica se pode votar
let podeVotar = idade >= 16 && nacionalidade.toLowerCase() === "brasileira";

// Mostra o resultado
if (podeVotar) {
    alert("Pode votar!");
} else {
    alert("Não pode votar!");
}