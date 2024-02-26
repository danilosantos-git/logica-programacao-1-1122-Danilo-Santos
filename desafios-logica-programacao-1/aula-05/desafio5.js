// Desafio 5
// - Jogo de Adivinhação com Limite
// ● Modifique o jogo de adivinhação do Desafio 4 para limitar o 
// número de tentativas. Se o usuário não adivinhar o número dentro 
// de um determinado número de tentativas (por exemplo, 5 
// tentativas), o programa deve encerrar e informar o número 
// correto.

// Gera um número aleatório entre 1 e 100
// Math.random retorna números decimais "aleatórios" entre 0 e 1, por isso multiplico por 100
// dessa meneira consigo valores que chegam até 100, mas para garantir, utilizo Math.floor de 
// forma a garantir que o resultado da multiplicação seja um número inteiro
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Inicializa o contador de tentativas
let tentativas = 0;

// Define o limite de tentativas
const limiteTentativas = 5;

// Executa o loop enquanto o número de tentativas for menor que o limite
while (tentativas < limiteTentativas) {
    // Solicita o palpite do usuário
    const palpite = parseInt(prompt("Adivinhe o número entre 1 e 100:"));

    // Verifica se o palpite está correto
    if (palpite === numeroAleatorio) {
        console.log(`Parabéns! Você acertou o número em ${tentativas + 1} tentativa(s).`); // Exibe mensagem de acerto
        break; // Encerra o loop
    } else if (palpite < numeroAleatorio) { // Verifica se o palpite é menor que o número aleatório
        console.log("Tente um número maior.");
    } else { // Se não for igual nem menor, só pode ser maior
        console.log("Tente um número menor.");
    }

    // Incrementa o contador de tentativas
    tentativas++;
}

if (tentativas === limiteTentativas) { // Se atingir o limite de tentativas
    console.log(`Suas ${limiteTentativas} tentativas acabaram. O número correto era: ${numeroAleatorio}.`); // Exibe o número correto
}