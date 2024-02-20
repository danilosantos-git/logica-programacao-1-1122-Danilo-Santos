// Desafio 4
// - Verificação de Triângulo
// ● Crie um programa que recebe três comprimentos de lados de um 
// triângulo como entrada e determina se eles formam um triângulo 
// equilátero (Todos os lados são iguais), isósceles (Dois lados 
// são iguais) ou escaleno (Se nada é igual). Imprima a 
// classificação do triângulo.

// Recebe os comprimentos dos lados do triângulo
let lado1 = parseFloat(prompt("Digite o comprimento do primeiro lado:"));
let lado2 = parseFloat(prompt("Digite o comprimento do segundo lado:"));
let lado3 = parseFloat(prompt("Digite o comprimento do terceiro lado:"));

// Verifica se os valores são válidos para formar um triângulo
if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    if (lado1 === lado2 && lado2 === lado3) {
        console.log("O triângulo é equilátero.");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("O triângulo é isósceles.");
    } else {
        console.log("O triângulo é escaleno.");
    }
} else {
    console.log("Os comprimentos dos lados fornecidos não formam um triângulo!");
}