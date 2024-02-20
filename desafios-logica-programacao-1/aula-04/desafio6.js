// Desafio 6
// - Verificação de Idade que é permitido dirigir (If e Ternário)
// ● Crie um programa que verifica a idade de uma pessoa e determina 
// se ela pode dirigir ou não. Se a pessoa tiver 18 anos ou mais, 
// ela pode dirigir; caso contrário, não pode.

// Recebe a idade como entrada
let idade = parseInt(prompt("Digite a idade:"));

// Verifica se a pessoa pode dirigir usando um operador ternário (If Ternário)
let podeDirigir = idade >= 18 ? "Pode dirigir" : "Não pode dirigir";

// Retorna o resultado do If Ternário
console.log(podeDirigir);