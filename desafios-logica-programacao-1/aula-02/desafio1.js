// Desafio 01
// Declare duas variáveis, numero1 e numero2, com valores diferentes e calcule a
// soma, subtração, multiplicação e divisão desses números. Armazene os
// resultados em um array, sendo o
// Index: 0 = Soma
//  1 = subtração
//  2 = multiplicação
//  3 = divisão

// Declaração das variáveis
let numero1 = 10;
let numero2 = 2;

// Cria um array vazio para armazenar os resultados e os nomes das operações
let resultado = [];
let operacoes = ['Soma', 'Subtração', 'Multiplicação', 'Divisão'];

// Calcula as operações e armazena os resultados e os nomes das operações no array resultado
resultado.push({ operacao: operacoes[0], resultado: numero1 + numero2 });
resultado.push({ operacao: operacoes[1], resultado: numero1 - numero2 });
resultado.push({ operacao: operacoes[2], resultado: numero1 * numero2 });
resultado.push({ operacao: operacoes[3], resultado: numero1 / numero2 });

// Exibe os valores declarados
console.log(`Valores declarados: ${numero1}, ${numero2}`);

// Exibe os resultados com os nomes das operações
resultado.forEach(item => {
    console.log(`${item.operacao}: ${item.resultado}`);
});