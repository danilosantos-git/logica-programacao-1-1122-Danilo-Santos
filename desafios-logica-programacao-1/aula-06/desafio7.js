// Desafio 7
// Ache a lógica: 1 1 2 3 5 8 13
// Agora, sua tarefa é criar um programa que recebe um número inteiro N 
// como entrada e retorna os primeiros N termos da sequência.
// Exemplo: 
// Entrada: 6 Saída: [1 , 1, 2, 3, 5, 8] 
// Entrada: 14 Saída: [1, 1, 2, 3, 5, 8, 13, …, 377]

// A lógica por trás da sequência é um modelo conhecido como sequência de Fibonacci
function fibonacci(n) {
    let sequencia = [1, 1]; // Inicializa a sequência com os dois primeiros termos, 1 e 1 sempre fazem parte
    for (let i = 2; i < n; i++) {
        sequencia[i] = sequencia[i - 1] + sequencia[i - 2]; // Calcula o termo atual baseado nos dois anteriores (cada termo é a soma dos dois termos anteriores)
    }
    return sequencia.slice(0, n); // Retorna os primeiros N termos da sequência
}

// Solicita ao usuário a quantidade de termos desejada
const quantidadeTermos = parseInt(prompt("Digite a quantidade de termos desejada:"));

// Exibe os primeiros N termos da sequência de Fibonacci
console.log(fibonacci(quantidadeTermos));