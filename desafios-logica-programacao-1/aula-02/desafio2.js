// Desafio 02
// Crie um vetor (array) chamado notas com as notas de um aluno em três
// disciplinas. Em seguida, calcule a média das notas usando a fórmula matemática
// da média aritmética.

// Cria um vetor (array) com as notas do aluno em três disciplinas
let notas = [7.5, 8.2, 6.9];

// Calcula a média das notas usando a fórmula da média aritmética
let soma = 0;
for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}
let media = soma / notas.length;

// Limita o resultado da média a duas casas decimais
media = media.toFixed(2);

// Exibe os valores das notas
console.log("Notas do aluno: " + notas.join(", "));

// Retorna o resultado da média
console.log("A média das notas é: " + media);