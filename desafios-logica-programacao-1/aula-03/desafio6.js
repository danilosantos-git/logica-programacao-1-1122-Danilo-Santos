// Desafio 06
// Crie um objeto chamado aluno com as propriedades nome, nota1, e nota2. 
// Calcule a média das notas. 
// Verifique se a média é maior ou igual a 7 usando operadores de comparação.

// Criando o objeto aluno
const aluno = {
    nome: "Maria",
    nota1: 8,
    nota2: 7
};

// Calculando a média das notas
const media = (aluno.nota1 + aluno.nota2) / 2;

// Verificando se a média é maior ou igual a 7
const mediaMaiorIgualASete = media >= 7;

// Exibindo o nome, a média e se foi aprovado
console.log(`Aluno(a): ${aluno.nome}`);
console.log(`Notas: ${aluno.nota1} e ${aluno.nota2}`);
console.log(`Média das notas: ${media}`);
console.log(`Média maior ou igual a 7: ${mediaMaiorIgualASete}`);