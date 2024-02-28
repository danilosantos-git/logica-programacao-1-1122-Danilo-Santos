// Desafio 1
// Utilizando um loop for, calcule a soma dos números de 1 a 10 e
// imprima o resultado.
// (1+2=3+3=6+4=10+5=15)

// Inicializa a variável soma
let soma = 0;

// Define o primeiro número como 1
let primeiroNumero = 1;

// Loop de 2 a 10. Foi definido 1 como o primeiro valor, para obter uma melhor saída do reultado
for (let i = 2; i <= 10; i++) {
    // Calcula a soma
    soma = primeiroNumero + i;
    // Imprime a soma substituindo os valores com base no número de interações
    console.log(`${primeiroNumero} + ${i} = ${soma}`);
    // Atualiza o primeiro número para a próxima iteração
    primeiroNumero = soma;
}