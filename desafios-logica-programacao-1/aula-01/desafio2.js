// Desafio 02 - Aprovação de Empréstimo
// Receba através do prompt:
// ● salario
// ● scoreDeCredito
// ● idade
// Então deve retornar true se a pessoa for aprovada para um empréstimo nas 
// seguintes condições:
// ● O salário for maior ou igual a 5000. 
// ● O score de crédito for maior ou igual a 700. 
// ● A idade for maior ou igual a 18.

// Entrada dos dados
let salario = parseFloat(prompt("Digite o salário:"));
let score = parseInt(prompt("Digite o score de crédito:"));
let idade = parseInt(prompt("Digite a idade:"));

// Verifica se foi aprovado para o empréstimo
let aprovado = salario >= 5000 && score >= 700 && idade >= 18;

// Mostra o resultado
if (aprovado) {
    alert("Aprovado para o empréstimo!");
} else {
    alert("Não aprovado para o empréstimo!");
}