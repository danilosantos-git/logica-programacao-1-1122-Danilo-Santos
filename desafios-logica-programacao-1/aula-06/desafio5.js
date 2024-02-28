// Desafio 5
// Crie um objeto com valores numéricos e utilize um loop for-in para 
// calcular e imprimir a soma desses valores.
// { valor1: 10, valor2: 20, valor3: 30, valor4: 40 }

// Objeto base com os valores
const valores = {
    valor1: 10,
    valor2: 20,
    valor3: 30,
    valor4: 40,
    valor5: 50
};

// Inicializa a variável soma
let soma = 0;

// Utilização do loop for-in para percorrer as chaves do objeto
for (let valor in valores) {
    // Variável que é definida pelo valor referente a cada chave no objeto
    const valorAtual = valores[valor];
    // Mostra o valor atual antes de ser somado
    console.log(`${valor}: ${valorAtual}`);
    // Adiciona o valor da propriedade à soma
    soma += valorAtual;
}

// Imprime a soma dos valores
console.log(`A soma dos valores é: ${soma}`); 