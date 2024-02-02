// Desafio 04 - Verificar Elegibilidade para Desconto em Compra
// Receba através do prompt:
// ● idade
// ● compraMinima.
// ● isNewClient
// Deve retornar true se a pessoa for elegível para um desconto, o que ocorre
// quando:
// ● A idade for maior ou igual a 60 anos.
// ● E a compra for maior ou igual a R$ 100.
// ● E se isNewClient for False

// Entrada dos dados
let idade = prompt("Digite a sua idade:");
let compraMinima = prompt("Digite o valor da compra mínima:");
let isNewClient = prompt("Digite 's' se você é um novo cliente, ou 'n' caso contrário:");

// Converte os inputs para os respectivos tipos
idade = parseInt(idade);
compraMinima = parseFloat(compraMinima);

// Checa se uma opção válida foi escolhida (loop)
while (isNewClient.toLowerCase() !== 's' && isNewClient.toLowerCase() !== 'n') {
    isNewClient = prompt("Resposta inválida. Digite 's' se você é um novo cliente, ou 'n' caso contrário:");
}

isNewClient = (isNewClient.toLowerCase() === 's');

// Verifica se é elegível para o desconto
let elegivel = (idade >= 60 && compraMinima >= 100 && !isNewClient);

// Retorna o resultado
if (elegivel) {
    alert("Você receberá um desconto!");
} else {
    alert("Infelizmente você não está elegível para receber um desconto.");
}